from django.contrib import admin
from .models import CustomUser, Category, Product, WholesaleProduct, Services, Contact, MpesaPayment

admin.site.register(CustomUser)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(WholesaleProduct)
admin.site.register(Services)
admin.site.register(Contact)
admin.site.register(MpesaPayment)



