from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('products', views.products, name='products'),
    path('products_a_page/<str:index_page>', views.products_a_page, name='products_a_page'),
    path('detail-with-code/<str:product_code>', views.product_detail_with_code, name='product_detail_with_code'),
    path('product-detail', views.product_detail_with_id, name='product_detail_with_id'),
    path('product-category', views.get_all_category, name='product_category'),

    # order
    # path('orders/', views.orders, name='orders'),
    # path('order-by-user/<str:token>', views.order_by_user, name='order_by_user'),
    # path('delete-selected/<str:token>/<str:product_id>', views.delete_selected, name='delete_selected'),
    # path('buy-product/', views.buy_product, name="buy_product")

]