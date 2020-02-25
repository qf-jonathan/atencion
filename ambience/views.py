from .models import Table, Area
from order.models import Invoice, Detail
from order.serializers import DetailPreparationSerializer
from rest_framework import mixins, viewsets
from rest_framework.views import APIView, Response
from rest_framework.status import HTTP_404_NOT_FOUND
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


class PreparationView(APIView):
    def get(self, request, preparation_id):
        try:
            detail = Detail.objects.prefetch_related('item').prefetch_related(
                Prefetch('invoice', queryset=Invoice.objects.prefetch_related('table'))
            ).order_by('-registered_at').filter(
                item__destiny_id=preparation_id,
                invoice__state=Invoice.NEW,
                delivered_at__isnull=True,
            )
        except Detail.DoesNotExist:
            return Response(status=HTTP_404_NOT_FOUND)
        serialized = DetailPreparationSerializer(detail, many=True, context={'request': request})
        return Response(serialized.data)
