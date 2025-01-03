from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
import json
from django.http import JsonResponse
from .models import Contact, CustomUser, Product, Category, Services, WholesaleProduct
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
                'id': product.id,
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