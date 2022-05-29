from django.contrib import admin
from .models import Product, ProductCategory, Bill, BillOrder, ProductStock

# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
  list_display = ("product_name", "product_code", "product_price")


@admin.register(Bill)
class BillAdmin(admin.ModelAdmin):
  list_display = ("bill_id", "username", "created_date", 'ship_address', 'total')

@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
  list_display = ("product_category_name", "product_category_org")

@admin.register(BillOrder)
class BillOrderAdmin(admin.ModelAdmin):
  list_display = ("bill_id", "product_id", "quantity", )

@admin.register(ProductStock)
class ProductStockAdmin(admin.ModelAdmin):
  list_display = ("product_name", "quantity_in_stock")

