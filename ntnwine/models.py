from django.db import models
import uuid
from django.contrib.auth.models import User

class ProductCategory(models.Model):
    product_category_name = models.CharField(primary_key=True, max_length=50)
    product_category_org = models.CharField(max_length=50)
    product_category_image = models.ImageField(upload_to='gallery', blank=True, null=True)
    product_category_description = models.CharField(max_length=150, blank=True, null=True)
    def __str__(self):
        return self.product_category_name

class Product(models.Model):
    product_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_code = models.CharField(max_length=20, unique=True)
    product_name = models.CharField(max_length=150)
    product_category = models.ForeignKey(ProductCategory, null=True, on_delete=models.SET_NULL)
    product_image = models.ImageField(upload_to='gallery', blank=True, null=True)
    product_vote = models.IntegerField(default=0)
    product_price = models.IntegerField(null=False)
    product_description = models.CharField(max_length=150, blank=True, null=True)
    
# class CardOrder(models.Model):
#     product_id = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
#     user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
#     quantity = models.IntegerField(default=1)
    
class Bill(models.Model):
    bill_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_date = models.DateTimeField()
    user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    payment = models.BooleanField()

class BillOrder(models.Model):
    bill_id = models.ForeignKey(Bill, null=True, on_delete=models.SET_NULL)
    product_id = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
    quantity = models.IntegerField()