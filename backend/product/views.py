from django.shortcuts import render
from .models import Product
from rest_framework.decorators import api_view
from .serializers import GetAllProductSerializer
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
