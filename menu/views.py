from .models import Item, Category
from rest_framework import mixins, viewsets
from .serializers import ItemSerializer, CategorySerializer
from django.db.models import Prefetch


class ItemViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = Item.objects.filter(active=True)
    serializer_class = ItemSerializer


class CategoryViewSet(mixins.ListModelMixin,
                      mixins.RetrieveModelMixin,
                      viewsets.GenericViewSet):
    queryset = Category.objects.prefetch_related(
        Prefetch('item_set', queryset=Item.objects.filter(active=True))
    ).filter(active=True)
    serializer_class = CategorySerializer
