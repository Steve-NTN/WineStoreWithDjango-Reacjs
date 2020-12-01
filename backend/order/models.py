from django.db import models
from rest_framework.authtoken.models import Token
from product.models import Product 

# Create your models here.
class Order(models.Model):
    product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
    token = models.ForeignKey(Token, null=True, on_delete=models.SET_NULL)
    quantity = models.IntegerField(default=1)
    