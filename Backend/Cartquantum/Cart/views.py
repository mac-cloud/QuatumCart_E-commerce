# cart/views.py
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import Contact  # Import the Contact model

@csrf_exempt
def contact_form(request):
    if request.method == 'POST':
        try:
            # Decode the byte stream and parse JSON
            data = json.loads(request.body.decode('utf-8'))
            
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            # Validate input fields
            if not name or not email or not message:
                raise ValueError("All fields are required!")

            # Save the contact form data to the database
            contact = Contact.objects.create(
                name=name,
                email=email,
                message=message
            )

            # Return a success response
            return JsonResponse({
                "status": "success",
                "message": "Thank you for contacting us!"
            }, status=200)

        except ValueError as ve:
            # Handle validation errors (missing fields)
            return JsonResponse({
                "status": "error",
                "message": f"Validation Error: {str(ve)}"
            }, status=400)
        except Exception as e:
            # Catch other exceptions
            return JsonResponse({
                "status": "error",
                "message": f"Something went wrong: {str(e)}"
            }, status=500)

    # If the request method is not POST
    return JsonResponse({
        "status": "error",
        "message": "Invalid request method. Only POST is allowed."
    }, status=405)
