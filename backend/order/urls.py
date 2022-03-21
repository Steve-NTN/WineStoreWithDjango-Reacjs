from django.urls import path
from . import views


urlpatterns = [
    path('orders/', views.orders, name='orders'),
    path('order-by-user/<str:token>', views.order_by_user, name='order_by_user'),
    path('delete-selected/<str:token>/<str:product_id>', views.delete_selected, name='delete_selected'),
    path('buy-product/', views.buy_product, name="buy_product")
]