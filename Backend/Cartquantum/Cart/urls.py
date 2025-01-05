from django.urls import path
from .views import contact_form, signup, login_view, phones_view, services_view, wholesale_view, initiate_stk_push
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('contact/',contact_form, name='contact_form'),
    path('signup/', signup, name='signup'),
    path('login/', login_view, name="loginview"),
    path('phones/', phones_view, name="phones_view" ),
    path('services/', services_view, name="services_view"),
    path('wholesale/', wholesale_view, name="wholesale_view"),
    path('mpesapayment/<str:item_id>/', initiate_stk_push, name="initiate_stk_push"),
    #path('mpesa/callback/', mpesa_callback, name='mpesa_callback'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)