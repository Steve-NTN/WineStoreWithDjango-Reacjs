from django.shortcuts import render
from .models import Product, ProductCategory, Bill
from rest_framework.decorators import api_view
from .serializers import GetAllBillSerializer, GetAllProductSerializer, GetAllProductCategorySerializer
from django.http import JsonResponse
from rest_framework.response import Response

# Create your views here.
def home(request):
    products = Product.objects.all()
    context = {"products": products}
    return render(request, 'product/index.html', context)

# Get all of product
@api_view(['GET'])
def products(request):
    products = Product.objects.all()
    serializer = GetAllProductSerializer(products, many=True)
    return Response(serializer.data)

# Get limit 5 first product
@api_view(['GET'])
def products_a_page(request, index_page):
    index_page = int(index_page)
    start = (index_page - 1) * 8
    end = (index_page - 1) * 8 + 8
    products = Product.objects.all()[start:end]
    quantity = Product.objects.all().count()
    serializer = GetAllProductSerializer(products, many=True)
    res_data = {}
    res_data['quantity'] = quantity
    res_data['products'] = serializer.data
    return JsonResponse(res_data)

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
@api_view(['GET'])
def get_all_category(request):
    product_categories = ProductCategory.objects.all()
    serializer = GetAllProductCategorySerializer(product_categories, many=True)
    return Response(serializer.data)

# Create your views here.
@api_view(['GET'])
def bill(request):
    orders = Bill.objects.all()
    serializer = GetAllBillSerializer(orders, many=True)
    return Response(serializer.data)

# # Get detail of product
# @api_view(['GET'])
# def order_by_user(request, token):
#     orders = Order.objects.filter(token=token)
#     serializer = GetAllOrderSerializer(orders, many=True)
#     return Response(serializer.data)

# # Add product to cart
# @api_view(['POST'])
# def buy_product(request):
#     data = request.data.copy()
#     product = Product.objects.filter(product_id=data['product'])
#     token = Token.objects.filter(key=data['token'])
#     checkOrder = Order.objects.filter(token=token[0], product=product[0])
#     quantity = 0
#     if(len(checkOrder) == 0):
#         order = Order.objects.create(token=token[0], 
#         quantity=1, product=product[0])
#         quantity = 1
#         order.save()
#     else:
#         order = Order.objects.get(token=token[0], product=product[0])
#         order.quantity += 1
#         quantity += 1
#         order.save()

#     return Response(quantity, status=status.HTTP_201_CREATED)

# # Delete product from cart
# @api_view(['DELETE'])
# def delete_selected(request, token, product_id):
#     order = Order.objects.get(token=token, product=product_id).delete()
#     return Response("Xóa thành công", status=status.HTTP_200_OK)
