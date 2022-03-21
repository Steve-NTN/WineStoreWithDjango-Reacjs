from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('products', views.products, name='products'),
    path('products_a_page/<str:index_page>', views.products_a_page, name='products_a_page'),
    path('detail-with-code/<str:product_code>', views.product_detail_with_code, name='product_detail_with_code'),
    path('product-detail', views.product_detail_with_id, name='product_detail_with_id'),
]