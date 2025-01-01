from django import forms
from .models import Product


class ProductForm(forms.ModelForm):
    class Meta:
        fields = [ 'name', 'category' 'brand', 'price', 'description', 'release_date', 'stock', 'image']