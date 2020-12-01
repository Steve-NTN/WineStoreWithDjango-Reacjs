from django.shortcuts import render
from .models import Order
import sys
sys.path.append("..")
from product.models import Product
from rest_framework.decorators import api_view
from .serializers import GetAllOrderSerializer
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
from rest_framework import status
import json
from rest_framework.authtoken.models import Token

# Create your views here.
@api_view(['GET'])
def orders(request):
    orders = Order.objects.all()
    serializer = GetAllOrderSerializer(orders, many=True)
    return Response(serializer.data)

# Get detail of product
@api_view(['GET'])
def order_by_user(request, token):
    orders = Order.objects.filter(token=token)
    serializer = GetAllOrderSerializer(orders, many=True)
    return Response(serializer.data)

# Add product to cart
@api_view(['POST'])
def buy_product(request):
    data = request.data.copy()
    product = Product.objects.filter(product_id=data['product'])
    token = Token.objects.filter(key=data['token'])
    checkOrder = Order.objects.filter(token=token[0], product=product[0])
    quantity = 0
    if(len(checkOrder) == 0):
        order = Order.objects.create(token=token[0], 
        quantity=1, product=product[0])
        quantity = 1
        order.save()
    else:
        order = Order.objects.get(token=token[0], product=product[0])
        order.quantity += 1
        quantity += 1
        order.save()

    return Response(quantity, status=status.HTTP_201_CREATED)

# Delete product from cart
@api_view(['DELETE'])
def delete_selected(request, token, product_id):
    order = Order.objects.get(token=token, product=product_id).delete()
    return Response("Xóa thành công", status=status.HTTP_200_OK)
