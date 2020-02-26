from .models import Invoice, Detail
from rest_framework import mixins, viewsets, status
from rest_framework.views import APIView, Response
from .serializers import InvoiceSerializer, InvoiceSaveSerializer, DetailPreparationSerializer
from django.shortcuts import get_object_or_404


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


class InvoiceStateUpdateView(APIView):
    def delete(self, request, invoice_id):
        invoice = get_object_or_404(Invoice, pk=invoice_id)
        invoice.state = Invoice.PAID
        invoice.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DetailSaveViewSet(mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        viewsets.GenericViewSet):
    queryset = Detail.objects.filter(delivered_at__isnull=True)
    serializer_class = DetailPreparationSerializer
