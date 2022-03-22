from rest_framework import serializers
from .models import Product, ProductCategory

class GetAllProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'

class GetAllProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductCategory
        fields = '__all__'