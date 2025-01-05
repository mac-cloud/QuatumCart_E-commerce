from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from datetime import datetime
from django.http import HttpResponse
from django.shortcuts import render
from django_daraja.mpesa.core import MpesaClient
from django.conf import settings
import json
import requests
import logging
import base64
import sys
from django.http import JsonResponse
from .models import Contact, CustomUser, Product, Category, Services, WholesaleProduct, MpesaPayment

print(sys.path)
# contact logic
@csrf_exempt
def contact_form(request):
    if request.method == 'POST':
        try:

            data = json.loads(request.body.decode('utf-8'))
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            if not name or not email or not message:
                raise ValueError("All fields are required!")


            contact = Contact.objects.create(
                name=name,
                email=email,
                message=message
            )

            return JsonResponse({
                "status": "success",
                "message": "Thank you for contacting us!"
            }, status=200)

        except ValueError as ve:

            return JsonResponse({
                "status": "error",
                "message": f"Validation Error: {str(ve)}"
            }, status=400)
        except Exception as e:

            return JsonResponse({
                "status": "error",
                "message": f"Something went wrong: {str(e)}"
            }, status=500)

    return JsonResponse({
        "status": "error",
        "message": "Invalid request method. Only POST is allowed."
    }, status=405)


# signup logic
@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            # Parse JSON request body
            data = json.loads(request.body.decode('utf-8'))
            email = data.get('email')
            password = data.get('password')
            name = data.get('name')

            # Validate required fields
            if not email or not password or not name:
                return JsonResponse({
                    "status": "error",
                    "message": "All fields are required."
                }, status=400)

            # Check if user already exists
            User = get_user_model()
            if User.objects.filter(email=email).exists():
                return JsonResponse({
                    "status": "error",
                    "message": "User with this email already exists."
                }, status=400)

            # Create the new user
            user = User.objects.create_user(
                email=email,
                password=password,
                name=name
            )

            return JsonResponse({
                "status": "success",
                "message": "User registered successfully."
            }, status=201)

        except Exception as e:
            # Handle unexpected errors
            return JsonResponse({
                "status": "error",
                "message": f"An error occurred: {str(e)}"
            }, status=500)

    # Reject non-POST requests
    return JsonResponse({
        "status": "error",
        "message": "Invalid request method."
    }, status=405)

#login view
@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return JsonResponse({
                    "status": "error",
                    "message": "Both email and password are required."
                }, status=400)

            # Authenticate the user
            user = authenticate(request, username=email, password=password)
            if user is not None:
                return JsonResponse({
                    "status": "success",
                    "message": "Login successful.",
                    "user": {
                        "id": user.id,
                        "email": user.email,
                        "name": user.name,  # Replace 'name' with the correct field in your model
                    }
                }, status=200)
            else:
                return JsonResponse({
                    "status": "error",
                    "message": "Invalid email or password."
                }, status=401)

        except Exception as e:
            return JsonResponse({
                "status": "error",
                "message": f"An error occurred: {str(e)}"
            }, status=500)

    return JsonResponse({
        "status": "error",
        "message": "Invalid request method."
    }, status=405)


#products logic
@csrf_exempt
def phones_view(request):
    categories = Category.objects.all()
    products_data = []


    for category in categories:
        products = Product.objects.filter(category=category)

        category_data = {
            'category_name': category.name,
            'category_description': category.description,
            'products': []
        }

        for product in products:
            product_data = {
                'item_id': product.item_id,
                'name': product.name,
                'category': product.category.name,
                'brand': product.brand,
                'price': str(product.price),  # Convert Decimal to string for JSON
                'description': product.description,
                'release_date': product.release_date,
                'stock': product.stock,
                'stock_status': product.stock_status(),
                'image': product.image.url if product.image else None,
            }

            category_data['products'].append(product_data)

        products_data.append(category_data)

    return JsonResponse({'categories': products_data}, safe=False)
    


# services logic
def services_view(request):
    if request.method == 'GET':
        services = Services.objects.all()
        data = [
            {
                "id": service.id,
                "name": service.name,
                "description": service.description,
                "service_image": service.service_image.url if service.service_image else None,
            }
            for service in services
        ]
        return JsonResponse(data, safe=False)
    

# wholesale logic
def wholesale_view(request):
    if request.method == 'GET':
        wholesales = WholesaleProduct.objects.all()
        data = [
            {
                "id": wholesaleproduct.id,
                "name": wholesaleproduct.name,
                "description": wholesaleproduct.description,
                "price": wholesaleproduct.price,  # Assuming you have this field in the model
                "image": wholesaleproduct.image.url if wholesaleproduct.image else None,
                "stock_status": "In Stock" if wholesaleproduct.stock > 0 else "Out of Stock",
            }
            for wholesaleproduct in wholesales
        ]
        return JsonResponse(data, safe=False)
    
   # Fetch access token from Safaricom API

logger = logging.getLogger(__name__)



@csrf_exempt
def initiate_stk_push(request, item_id):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            phone_number = data.get('phone_number')
            amount = data.get('amount')

            # Fetch product by item_id
            try:
                product = Product.objects.get(item_id=item_id)
            except Product.DoesNotExist:
                return JsonResponse({'error': 'Item not found'}, status=404)

            # Input validation
            if not phone_number or not amount:
                return JsonResponse({'error': 'Phone number and amount are required'}, status=400)

            try:
                amount = int(amount)
            except ValueError:
                return JsonResponse({'error': 'Amount must be an integer'}, status=400)

            # Format phone number to 254 format
            if phone_number.startswith('07'):
                phone_number = '254' + phone_number[1:]

            cl = MpesaClient()
            account_reference = item_id
            transaction_desc = f'Payment for {product.name}'
            callback_url = 'https://api.darajambili.com/express-payment'

            # Initiate STK Push
            response = cl.stk_push(
                phone_number,
                amount,
                account_reference,
                transaction_desc,
                callback_url
            )

            logger.info(f"STK Push Response: {response}")

            # Save transaction regardless of success or failure
            transaction = MpesaPayment.objects.create(
               phone_number=phone_number,
               amount=amount,
               response_code=response.response_code,  # Updated line
               response_description=response.response_description,  # Updated line
               merchant_request_id=response.merchant_request_id,  # Updated line
               checkout_request_id=response.checkout_request_id  # Updated line
)
    
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        except Exception as e:
            logger.error(f"STK Push Error: {str(e)}")
            return JsonResponse({'error': 'Internal server error'}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
