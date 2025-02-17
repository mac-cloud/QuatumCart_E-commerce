from django.urls import path
from .views import contact_form, signup, login_view, phones_view, services_view, wholesale_view, home_view, initiate_stk_push, mpesa_callback,item_details,calculate_price, track_parcel
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', home_view, name='home'),
    path('contact/',contact_form, name='contact_form'),
    path('signup/', signup, name='signup'),
    path('login/', login_view, name="loginview"),
    path('phones/', phones_view, name="phones_view" ),
    path('services/', services_view, name="services_view"),
    path('wholesale/', wholesale_view, name="wholesale_view"),
    path('mpesapayment/<str:item_id>/', initiate_stk_push, name="initiate_stk_push"),
    path('mpesa_callback/', mpesa_callback, name='mpesa_callback'),
    path('track/<str:carrier>/<str:tracking_number>/', track_parcel, name="track_parcel"),
    path('item/<str:item_id>/', item_details, name="item_details"),
    path('calculate_price/', calculate_price, name="calculate_price"),
    #path('api/auth/validate-token', validate_token, name='validate_token'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)