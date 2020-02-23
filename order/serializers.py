from rest_framework import serializers
from .models import Detail, Invoice
from menu.serializers import ItemSerializer


class DetailSerializer(serializers.HyperlinkedModelSerializer):
    item = ItemSerializer(read_only=True)

    class Meta:
        model = Detail
        fields = ['url', 'item', 'state']


class InvoiceSerializer(serializers.HyperlinkedModelSerializer):
    detail_set = DetailSerializer(many=True, read_only=True)

    class Meta:
        model = Invoice
        fields = ['url', 'detail_set']
