from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
import json
from django.http import JsonResponse
from .models import Contact, User
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
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode('utf-8'))

            name = data.get('name')
            email = data.get('email')
            password = data.get('password')

            # validating input
            if not name or not email or not password:
                return JsonResponse({
                    "status": "error",
                    "message": "All fields are required"
                }, status=400)
            #check if user exist
            if User.objects.filter(email=email).exists():
                return JsonResponse({
                    "status": "error", 
                    "message": "Email already registerd"
                }, status=400)
            
            # create and save
            user = User.objects.create(name=name, email=email, password=password)

            return JsonResponse({
                "status": "success",
                "message": "User registered successfully!"
            }, status=201)
            
        except Exception as e:
            return JsonResponse({ 
                "status": "error",
                "message": f"An error occurred: {str(e)}"}, status=500)   
    return JsonResponse({ 
            "status": "error", 
            "message": "Invalid request method."}, status=50)    



# login logic

@csrf_exempt
def loginview(request):
    if request.method == 'POST':
        try:
            # Parse the JSON request body
            data = json.loads(request.body.decode('utf-8'))
            email = data.get('email')
            password = data.get('password')

            # Validate input fields
            if not email or not password:
                return JsonResponse({"status": "error", "message": "Email and password are required."}, status=400)

            # Get the user by email
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return JsonResponse({"status": "error", "message": "Invalid email or password."}, status=401)

            # Authenticate user with username and password
            user = authenticate(username=user.username, password=password)
            if user is not None:
                # Successful authentication
                return JsonResponse({"status": "success", "message": "Login successful!"}, status=200)
            else:
                # Invalid password
                return JsonResponse({"status": "error", "message": "Invalid email or password."}, status=401)

        except Exception as e:
            # Catch any unexpected exceptions
            return JsonResponse({"status": "error", "message": f"An error occurred: {str(e)}"}, status=500)

    # Reject non-POST requests
    return JsonResponse({"status": "error", "message": "Invalid request method."}, status=405)