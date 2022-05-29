from django.contrib import admin
from .models import Product, ProductCategory, Bill, BillOrder, ProductStock, Statistical
from datetime import date
from django.utils.translation import gettext_lazy as _

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
  list_display = ("product_id", "quantity_in_stock")


class StatisticalFilter(admin.SimpleListFilter):
  title = _('Lọc theo ngày')

  def lookups(self, request, model_admin):
    qs = model_admin.get_queryset(request)
    if qs.filter(
      order_date=date(1980, 1, 1),
    ).exists():
      yield ('80s', _('in the eighties'))
    # if qs.filter(
    #   order_date=date(1990, 1, 1),
    # ).exists():
    #   yield ('90s', _('in the nineties'))

@admin.register(Statistical)
class StatisticalAdmin(admin.ModelAdmin):
  list_display = ("product_id", "order_date", "order_quantity")
  list_filter = ('order_date', 'product_id')