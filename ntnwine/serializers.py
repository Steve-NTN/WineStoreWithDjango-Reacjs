from rest_framework import serializers
from .models import Bill, Product, ProductCategory

class GetAllProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'

class GetAllProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductCategory
        fields = '__all__'

class GetAllBillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = '__all__'