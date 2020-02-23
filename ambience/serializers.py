from rest_framework import serializers
from .models import Table, Area
from order.serializers import InvoiceSerializer


class TableSerializer(serializers.HyperlinkedModelSerializer):
    invoice_set = InvoiceSerializer(many=True, read_only=True)

    class Meta:
        model = Table
        fields = ['url', 'label', 'invoice_set']


class AreaSerializer(serializers.ModelSerializer):
    table_set = TableSerializer(many=True, read_only=True)

    class Meta:
        model = Area
        fields = ['name', 'table_set']
