from .models import Item
from rest_framework import mixins, viewsets
from .serializers import ItemSerializer


class ItemViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = Item.objects.filter(active=True)
    serializer_class = ItemSerializer
