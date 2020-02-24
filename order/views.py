from .models import Invoice, Detail
from rest_framework import mixins, viewsets
from .serializers import InvoiceSerializer, InvoiceSaveSerializer


class InvoiceViewSet(mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                     viewsets.GenericViewSet):
    queryset = Invoice.objects.filter(state=Invoice.NEW)
    serializer_class = InvoiceSerializer


class DetailViewSet(mixins.ListModelMixin,
                    mixins.RetrieveModelMixin,
                    viewsets.GenericViewSet):
    queryset = Detail.objects.filter(delivered_at__isnull=True)


class InvoiceSaveViewSet(mixins.CreateModelMixin,
                         mixins.UpdateModelMixin,
                         viewsets.GenericViewSet):
    queryset = Invoice.objects.filter(state=Invoice.NEW)
    serializer_class = InvoiceSaveSerializer
