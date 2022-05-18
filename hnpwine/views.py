from unittest import result
from django.shortcuts import render
from .models import BillOrder, Product, ProductCategory, Bill, ProductStock
from rest_framework.decorators import api_view
from .serializers import (
    GetAllBillSerializer, GetAllProductSerializer, GetAllProductCategorySerializer, 
    GetAllUserSerializer, GetAllBillSerializer, GetAllStockSerializer
)
from django.http import JsonResponse
from rest_framework.response import Response
from django.db import transaction
from rest_framework import serializers, status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
import datetime
import math 
from django.core import serializers

# Create your views here.
def home(request):
    products = Product.objects.all()
    context = {"products": products}
    return render(request, 'product/index.html', context)

# Get all of product
# @api_view(['GET'])
# def products(request):
#     products = Product.objects.all()
#     serializer = GetAllProductSerializer(products, many=True)
#     return Response(serializer.data)

# Get limit 5 first product
@api_view(['POST'])
def products(request):
    try:
        data = request.data.copy()
        all_products = (Product.objects.filter(product_name__contains=data.get('search_key')) 
            if data.get('search_key') else Product.objects.all()
        )
        all_products = GetAllProductSerializer(all_products.values(), many=True).data
        total_quantity = len(all_products)
        page_size, page_index = int(data.get('page_size')), int(data.get('page_index'))
        start = page_index * page_size
        end = (page_index + 1) * page_size
        products = all_products[start: end]

        for index, product in enumerate(products):
            products[index].setdefault('qlt_in_stock', get_qlt_in_stock(product.get('product_id')))

        return JsonResponse({
            'quantity': total_quantity,
            'products': products
        })
    except Exception as e:
        Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        raise


def get_qlt_in_stock(product_id):
    try:
        stock = ProductStock.objects.get(product_id=product_id)
        return stock.quantity_in_stock
    except Exception as e:
        return 0

# Get detail of product
@api_view(['GET'])
def product_detail_with_code(request, product_code):
    product = Product.objects.get(product_code=product_code)
    serializer = GetAllProductSerializer(product, many=False)
    return Response(serializer.data)

# Get detail of product
@api_view(['GET', 'POST'])
def product_detail_with_id(request):
    print(request.data)
    product = Product.objects.get(product_id=request.data.get('product_id'))
    serializer = GetAllProductSerializer(product, many=False)
    return Response(serializer.data)


# Get all of product category
@api_view(['POST'])
def categories(request):
    data = request.data.copy()
    all_products = ProductCategory.objects.all()
    total_quantity = len(all_products)
    page_size, page_index = int(data.get('page_size')), int(data.get('page_index'))
    start = page_index * page_size
    end = (page_index + 1) * page_size
    product_categories = all_products[start: end]
    serializer = GetAllProductCategorySerializer(product_categories, many=True)
    return JsonResponse({
        'quantity': total_quantity,
        'categories': serializer.data
    })

# Create your views here.
@api_view(['GET'])
def bill(request):
    orders = Bill.objects.all()
    serializer = GetAllBillSerializer(orders, many=True)
    return Response(serializer.data)


# create user
@api_view(['POST'])
def register(request):
    user = User.objects.create_user(
        username=request.data.get('username'),
        password=request.data.get('password'),
        first_name=request.data.get('fullname'),
        email=request.data.get('email'),
    )
    serializer = GetAllUserSerializer(user)

    return Response(serializer.data)

# # Get detail of product
# @api_view(['GET'])
# def order_by_user(request, token):
#     orders = Order.objects.filter(token=token)
#     serializer = GetAllOrderSerializer(orders, many=True)
#     return Response(serializer.data)  

# # Add product to cart
@transaction.atomic
@api_view(['POST'])
def create_order(request):
    try:
        data = request.data.copy()
        # check user
        with transaction.atomic():
            token = Token.objects.get(key=data.get('token'))
            user = token.user
            if not user:
                return Response(data='User not found', status=status.HTTP_404_NOT_FOUND)

            # create order
            new_order = Bill.objects.create(
                created_date=datetime.datetime.now(),
                user_id=user,
                username=data.get('username'),
                phone_number=data.get('phone_number'),
                ship_address=data.get('ship_address'),
                total=data.get('total') or 0
            )

            # create order products
            if not data.get('products') or len(data.get('products')) <= 0:
                return Response(data='Order products not valid', status=status.HTTP_409_CONFLICT)

            for product in data.get('products'):
                try:
                    crt_qlt = ProductStock.objects.get(product_id=product.get('product_id'))
                except Exception:
                    crt_qlt = None

                if crt_qlt:
                    new_product = BillOrder.objects.create(
                        bill_id=new_order,
                        product_id=Product.objects.get(product_id=product.get('product_id')),
                        quantity=product.get('quantity')
                    )
                    crt_qlt.quantity_in_stock = crt_qlt.quantity_in_stock - product.get('quantity')
                    crt_qlt.save()
            serializer = GetAllBillSerializer(new_order)
        return Response(serializer.data)
    except Exception as e:
        transaction.set_rollback(True)
        Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        raise

# # Delete product from cart
# @api_view(['DELETE'])
# def delete_selected(request, token, product_id):
#     order = Order.objects.get(token=token, product=product_id).delete()
#     return Response("Xóa thành công", status=status.HTTP_200_OK)
