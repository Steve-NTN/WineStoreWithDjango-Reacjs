from rest_framework import serializers
from .models import Bill, Product, ProductCategory
import os
from django.http import HttpResponse, HttpResponseNotFound
from django.views import View

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


# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()