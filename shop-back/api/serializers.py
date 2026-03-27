from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        models = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        models = Product
        fields = '__all__'
        