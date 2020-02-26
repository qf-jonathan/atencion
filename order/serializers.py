from rest_framework import serializers
from .models import Detail, Invoice
from menu.serializers import ItemSerializer, ItemPreparationSerializer
from django.db import transaction
from datetime import datetime


class DetailSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='detail-save-detail')
    item = ItemSerializer(read_only=True)

    class Meta:
        model = Detail
        fields = ['url', 'id', 'item', 'state']


class InvoiceSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='invoice-save-detail')
    detail_set = DetailSerializer(many=True, read_only=True)

    class Meta:
        model = Invoice
        fields = ['url', 'id', 'table', 'detail_set', 'state']


class DetailSaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detail
        fields = ['id', 'item']


class InvoiceSaveSerializer(serializers.HyperlinkedModelSerializer):
    detail_set = DetailSaveSerializer(many=True)

    class Meta:
        model = Invoice
        fields = ['url', 'table', 'detail_set', 'state']

    def create(self, validated_data):
        detail_list = validated_data.pop('detail_set')
        with transaction.atomic():
            invoice = Invoice.objects.create(**validated_data)
            for detail in detail_list:
                Detail.objects.create(invoice=invoice, **detail)
        return invoice

    def update(self, instance, validated_data):
        validated_data.pop('detail_set')
        with transaction.atomic():
            detail_list_prev = {detail.id: detail for detail in instance.detail_set.all()}
            for detail in self.initial_data['detail_set']:
                if detail['id'] is None:
                    Detail.objects.create(invoice=instance, item_id=detail['item'])
                elif detail['id'] in detail_list_prev:
                    del detail_list_prev[detail['id']]
            for _, detail in detail_list_prev.items():
                detail.delete()
        return instance


class InvoicePreparationSerializer(serializers.ModelSerializer):
    table = serializers.SlugRelatedField(slug_field='label', read_only=True)

    class Meta:
        model = Invoice
        fields = ['table']


class DetailPreparationSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='detail-save-detail')
    item = ItemPreparationSerializer(read_only=True)
    invoice = InvoicePreparationSerializer(read_only=True)

    class Meta:
        model = Detail
        fields = ['url', 'item', 'invoice', 'state']

    def update(self, instance, validated_data):
        if self.initial_data['state'] == 'auto':
            if instance.state == 'nuevo':
                instance.attended_at = datetime.now()
            elif instance.state == 'preparacion':
                instance.finalized_at = datetime.now()
            elif instance.state == 'listo':
                instance.delivered_at = datetime.now()
            instance.save()
        return instance
