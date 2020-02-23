from .models import Table, Area
from order.models import Invoice, Detail
from rest_framework import mixins, viewsets
from .serializers import TableSerializer, AreaSerializer
from django.db.models import Prefetch


class TableViewSet(mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet):
    queryset = Table.objects.filter(active=True)
    serializer_class = TableSerializer


class AreaViewSet(mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = Area.objects.prefetch_related(
        Prefetch('table_set', queryset=Table.objects.prefetch_related(
            Prefetch('invoice_set', queryset=Invoice.objects.prefetch_related(
                Prefetch('detail_set', queryset=Detail.objects.prefetch_related('item').all())
            ).filter(state=Invoice.NEW))
        ).filter(active=True))
    ).filter(active=True)
    serializer_class = AreaSerializer
