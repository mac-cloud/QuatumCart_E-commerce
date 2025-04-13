from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from datetime import datetime
from decimal import Decimal
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.shortcuts import render
from django_daraja.mpesa.core import MpesaClient
from .mpesa_callback import save_mpesa_callback_data
from django.conf import settings
import json
import uuid
import jwt
#import shippo
#from shippo.models import components
import requests
import logging
import base64
import sys
from django.http import JsonResponse
from .models import Contact, CustomUser, Product, Category, Services, WholesaleProduct, MpesaPayment
import os


print(sys.path)
# contact logic

@csrf_exempt
def home_view(request):
    index_file_path = '/home/mac-aphid/Desktop/PROJECTS/QuantumCart/Frontend/online-shop/build/index.html'
    try:
        with open(index_file_path, 'r') as file:
           return HttpResponse(file.read(), content_type='text/html')
    except FileNotFoundError:
        return HttpResponse("React build files not found. Please ensure you have built the React App", status=404)
    

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
# validating user token
#@csrf_exempt
#def validate_token(request):
#    if request.method == "POST":
#        try:
#            auth_header = request.headers.get("Authorization")
#            if not auth_header or not auth_header.startswith("Bearer "):
#                return JsonResponse({"isValid": False, "message": "Invalid token"}, status=401)
#
#            token = auth_header.split(" ")[1]
#
#            # Decode the token (use your secret key and algorithm)
#            decoded_token = jwt.decode(token, "your_secret_key", algorithms=["HS256"])
#
#            # Check if the user exists in the database
#            user_id = decoded_token.get("user_id")
#            if not User.objects.filter(id=user_id).exists():
#                return JsonResponse({"isValid": False, "message": "User not found"}, status=404)
#
#            return JsonResponse({"isValid": True})
#
#        except jwt.ExpiredSignatureError:
#            return JsonResponse({"isValid": False, "message": "Token expired"}, status=401)
#        except jwt.InvalidTokenError:
#            return JsonResponse({"isValid": False, "message": "Invalid token"}, status=401)
#        except Exception as e:
#            return JsonResponse({"isValid": False, "message": str(e)}, status=400)
#    else:
#        return JsonResponse({"message": "Method not allowed"}, status=405)
logger = logging.getLogger(__name__)

def item_details(request, item_id):
    item = get_object_or_404(Product, item_id=item_id)
    

    data = {
        "item_id": item.item_id,
        "name": item.name,
        "price": float(item.price)
    }

    return JsonResponse(data, safe=False)

@csrf_exempt
def initiate_stk_push(request, item_id):

    #print(f"Request method: {request.method}")
    #print(f"Request body: {request.body}")
#
    #logger.info(f"Received request for item_id: {item_id}") 
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
            callback_url = 'https://f8f2-102-209-18-102.ngrok-free.app/mpesa_callback/'

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
               checkout_request_id=response.checkout_request_id,  # Updated line
               account_reference=response.account_reference,
            )
    
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        except Exception as e:
            logger.error(f"STK Push Error: {str(e)}")
            return JsonResponse({'error': 'Internal server error'}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

#shippo_sdk = shippo.Shippo(api_key_header="shippo_test_de839afc8d10ae41c1b2e8102fb332db2c4b2ebb")


@csrf_exempt
def mpesa_callback(request):
    if request.method == "POST":
        try:
            # Incoming JSON data from Mpesa
            callback_data = json.loads(request.body)

            # Saving data to file
            save_mpesa_callback_data(callback_data)

            # Generate parcel ID
           # parcel_id = generate_parcel_id()
           # print(f"Generated Parcel ID: {parcel_id}")
             
            # Generate receipt details
            #receipt = generate_receipt(callback_data, parcel_id)
            #print(f"Generated Item receipt: {receipt}")
            ## Send receipt to customer mail
           # customer_email = callback_data.get("customer_email")
           # if customer_email:
           #     send_receipt_email(customer_email, receipt)
          

            #shippo_sdk.addresses.create(
            # components.AddressCreateRequest(
            #     name="Shawn Ippotle",
            #     company="Shippo",
            #     street1="215 Clayton St.",
            #     city="San Francisco",
            #     state="CA",
            #     zip="94117",
            #     country="US", # iso2 country code
            #     phone="+1 555 341 9393",
            #     email="shippotle@shippo.com"
            #   )         
         #)

            print(shippo_sdk)
            # Respond with parcel ID for verification
            return JsonResponse({
                "status": "success",
                "message": "M-Pesa callback processed successfully",
               # "parcel_id": parcel_id
            })
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)

    elif request.method == "GET":
        # Handle GET requests (maybe for testing or confirming the callback URL)
        return JsonResponse({
            "status": "error",
            "message": "GET requests are not allowed. Please use POST for the callback."
        }, status=400)
    else:
        return JsonResponse({
            "status": "error",
            "message": "Invalid request method"
        }, status=400)


# Parcel ID generation
def generate_parcel_id():
    return str(uuid.uuid4())


# Generate receipt
def generate_receipt(callback_data, parcel_id):
    # Extracting details from the callback data
    customer_name = callback_data.get("customer_name", "Customer")
    item_details = callback_data.get("item_details", "Unknown Item")
    amount = callback_data.get("amount", 0)
    order_date = callback_data.get("transaction_date", "Unknown Date")  # Use the actual transaction date key
    transaction_id = callback_data.get("transaction_id", "Unknown Transaction ID")  # Unique payment identifier
    
    # Generating receipt content
    receipt_content = f"""
    Receipt for Purchase
    ----------------------
    Customer: {customer_name}
    Item: {item_details}
    Amount Paid: KES {amount}
    Payment Date: {order_date}
    Transaction ID: {transaction_id}
    Parcel ID: {parcel_id}

    Thank you for your purchase!

    NOTE: Use your Parcel ID to track the real status of your package.
    """
    return receipt_content



# Send email
def send_receipt_email(customer_email, receipt):
    subject = "Your Purchase Receipt"
    from_email = settings.DEFAULT_FROM_EMAIL
    recipient_list = [customer_email]

    send_mail(
        subject,
        receipt,
        from_email,
        recipient_list,
        fail_silently=False
    )


# Shipping function
#shippo.api_key = settings.SHIPPO_API_KEY
#
#carriers = shippo.CarrierAccount.list()
#print(carriers)
#
#shipment = shippo.Shipment.create(
#    address_from={"name": "Sender Name", "street1": "123 Main St", "city": "San Francisco", "state": "CA", "zip": "94103", "country": "US"},
#    address_to={"name": "Receiver Name", "street1": "456 Elm St", "city": "New York", "state": "NY", "zip": "10001", "country": "US"},
#    parcels=[{"length": "10", "width": "5", "height": "5", "distance_unit": "in", "weight": "2", "mass_unit": "lb"}],
#    carrier_accounts=["carrier_id_here"],
#    servicelevel_token="usps_priority"
#)
#print(shipment)
#
#rates = shippo.Shipment.get_rates(shipment.object_id)
#print(rates)
#
#transaction = shippo.Transaction.create(
#    #rate=rate_id,
#    label_file_type="PDF"
#)
#print(transaction['label_url'])
#shippo.config(api_key="shippo_test_de839afc8d10ae41c1b2e8102fb332db2c4b2ebb")

#shippo_sdk = shippo.Shippo(api_key_header="shippo_test_de839afc8d10ae41c1b2e8102fb332db2c4b2ebb")

#shippo_sdk.addresses.create(
#    components.AddressCreateRequest(
#        name="Shawn Ippotle",
#        company="Shippo",
#        street1="215 Clayton St.",
#        city="San Francisco",
#        state="CA",
#        zip="94117",
#        country="US", # iso2 country code
#        phone="+1 555 341 9393",
#        email="shippotle@shippo.com"
#    )
#)
#
#print(shippo_sdk)
#def track_parcel(request, carrier, tracking_number):
#    """
#    Parcel information is fetched from Shippo.
#    """
#    try:
#        # Fetch tracking information
#        tracking = shippo.Track.get(carrier=carrier, tracking_number=tracking_number)
#
#        # Return data to frontend
#        return JsonResponse(tracking, safe=False)
#    except shippo.error.APIError as e:
#        return JsonResponse({'error': str(e)}, status=400)
#
#    except Exception as e:
#        return JsonResponse({'error': 'Something went wrong: ' + str(e)}, status=500)

# calculating price

def calculate_price(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        item_id = data.get('item_id')
        delivery_option = data.get('delivery_option')
        quantity = data.get('quantity', 1)

        try: 
            product = Product.objects.get(item_id=item_id)
            total_price = Decimal(product.price) * Decimal(quantity)
            delivery_fee = Decimal(100.00) if delivery_option == 'delivery' else Decimal(0.00)
            final_price = total_price + delivery_fee

            return JsonResponse({
                'item_name': product.name,
                'price_price': float(product.price),
                'quantity': quantity,
                'total_price': float(total_price),
                'delivery_fee': float(delivery_fee),
                'final_price': float(final_price),
            })
        except Product.DoesNotExist:
            return JsonResponse({'error': 'Item not found'}, status=404)


