from itertools import product
from django.db import models
import uuid
from django.contrib.auth.models import User
from backend.utils import replace_character, no_accent_vietnamese

class ProductCategory(models.Model):
    product_category_name = models.CharField(primary_key=True, max_length=50)
    product_category_org = models.CharField(max_length=50)
    product_category_image = models.ImageField(upload_to='image', blank=True, null=True)
    product_category_description = models.CharField(max_length=150, blank=True, null=True)
    def __str__(self):
        return self.product_category_name

class Product(models.Model):
    product_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_name = models.CharField(max_length=150)
    product_code = models.CharField(max_length=150, blank=True)
    product_category = models.ForeignKey(ProductCategory, null=True, on_delete=models.SET_NULL)
    product_image = models.ImageField(upload_to='image', blank=True, null=True)
    product_vote = models.IntegerField(default=0)
    product_price = models.IntegerField(null=False)
    product_description = models.CharField(max_length=150, blank=True, null=True)

    def save(self):
        self.product_code = replace_character(no_accent_vietnamese(self.product_name), '-')
        super(Product, self).save()

    def __str__(self):
        return f"{self.product_name}-{self.product_price}"
    
# class CardOrder(models.Model):
#     product_id = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
#     user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
#     quantity = models.IntegerField(default=1)
    
class Bill(models.Model):
    bill_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_date = models.DateTimeField()
    user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    payment = models.BooleanField(default=0)
    username = models.CharField(max_length=50, blank=False)
    phone_number = models.CharField(max_length=20, blank=False)
    ship_address = models.CharField(max_length=150, blank=True, null=True)
    total = models.IntegerField(null=False)

    def __str__(self):
        return f"{self.user_id}-{self.phone_number}-{self.created_date}-{self.total}"

class BillOrder(models.Model):
    bill_id = models.ForeignKey(Bill, null=True, on_delete=models.SET_NULL)
    product_id = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
    quantity = models.IntegerField()

class ProductStock(models.Model):
    product_id = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
    product_name = models.CharField(max_length=150, blank=False)
    quantity_in_stock = models.IntegerField(default=0)

    # def save(self):
    #     product = Product.objects.get(product_id=self.product_id)
    #     self.product_name = product.product_name
    #     super(ProductStock, self).save()

    def __str__(self):
        return f"{self.product_id}-{self.product_name}"