from django.urls import path
from .views import contact_form, signup, loginview


urlpatterns = [
    path('contact/',contact_form, name='contact_form'),
    path('signup/', signup, name='signup'),
    path('login/', loginview, name="loginview"),

]