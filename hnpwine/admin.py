from django.contrib import admin
from .models import Product, ProductCategory, Bill, BillOrder, ProductStock

# Register your models here.
admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(Bill)
admin.site.register(BillOrder)
admin.site.register(ProductStock)
