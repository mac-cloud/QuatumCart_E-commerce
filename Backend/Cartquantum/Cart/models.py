from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _

# Custom User Manager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Create and return a regular user with an encoded password."""
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # Automatically encode the password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Create and return a superuser."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        return self.create_user(email, password, **extra_fields)

# Custom User Model
class CustomUser(AbstractBaseUser, PermissionsMixin):
    """Custom User Model for storing user details."""
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email


# Category Model
class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


# Product Model
class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")
    brand = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    release_date = models.DateField()
    stock = models.PositiveIntegerField()
    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return f"{self.category.name} - {self.brand} {self.name} - ${self.price}"

    def is_in_stock(self):
        """Returns True if the product is in stock, otherwise False."""
        return self.stock > 0

    def stock_status(self):
        """Returns a user-friendly stock status."""
        return "In Stock" if self.is_in_stock() else "Out of Stock"


# Wholesale Product Model
class WholesaleProduct(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="wholesaleproducts")
    brand = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    stock = models.PositiveIntegerField()
    image = models.ImageField(upload_to="wholesale/")

    def __str__(self):
        return f"{self.category.name} - {self.brand} {self.name} - ${self.price}"

    def is_in_stock(self):
        """Returns True if the product is in stock, otherwise False."""
        return self.stock > 0

    def stock_status(self):
        """Returns a user-friendly stock status."""
        return "In Stock" if self.is_in_stock() else "Out of Stock"


# Service Model
class Services(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    service_image = models.ImageField(upload_to='services/')

    def __str__(self):
        return self.name

class Contact(models.Model):
    """Model to store contact info"""
    name = models.CharField(max_length=100)
    email = models.EmailField()
   
    message = models.TextField()
  
    submitted_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Contact Form Submission from {self.name} "



