from rest_framework import serializers
from .models import Item, Category


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['name', 'image', 'price']


class CategorySerializer(serializers.ModelSerializer):
    item_set = ItemSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['name', 'item_set']
