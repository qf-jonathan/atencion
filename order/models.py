from django.db import models
from ambience.models import Table
from menu.models import Item


class Invoice(models.Model):
    NEW = 1
    CANCELED = 2
    PAID = 3
    CHOICES = (
        (NEW, 'Nuevo'),
        (CANCELED, 'Cancelado'),
        (PAID, 'Pagado'),
    )

    table = models.ForeignKey(Table, on_delete=models.PROTECT, related_name='invoice_set')
    registered_at = models.DateTimeField('registrado a', auto_now_add=True)
    state = models.IntegerField('estado', choices=CHOICES)

    def __str__(self):
        return f'{self.table.label} {self.registered_at}'


class Detail(models.Model):
    invoice = models.ForeignKey(Invoice, on_delete=models.PROTECT, related_name='detail_set')
    item = models.ForeignKey(Item, on_delete=models.PROTECT, related_name='detail_set')
    registered_at = models.DateTimeField('registrado a', auto_now_add=True)
    attended_at = models.DateTimeField('atendido a', null=True, blank=True)
    finalized_at = models.DateTimeField('finalizado a', null=True, blank=True)

    @property
    def state(self):
        if self.registered_at is None:
            return '-'
        if self.attended_at is None and self.finalized_at is None:
            return 'nuevo'
        if self.finalized_at is None:
            return 'preparacion'
        return 'finalizado'

    def __str__(self):
        return f'{self.item.name} {self.state}'
