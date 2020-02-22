from .models import Table
from rest_framework import mixins, viewsets
from .serializers import TableSerializer


class TableViewSet(mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet):
    queryset = Table.objects.filter(active=True)
    serializer_class = TableSerializer
