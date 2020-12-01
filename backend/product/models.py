from django.db import models
import uuid

# Create your models here.
class Product(models.Model):
    product_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_code = models.CharField(max_length=20, unique=True)
    product_name = models.CharField(max_length=150)
    product_type = models.CharField(max_length=50)
    product_image = models.ImageField(upload_to='gallery', blank=True, null=True)
    product_vote = models.IntegerField(default=0)
    product_price = models.IntegerField(null=False)
    product_desciption = models.CharField(max_length=150, blank=True, null=True)
