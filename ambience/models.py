from django.db import models


class Area(models.Model):
    name = models.CharField('nombre', max_length=128)
    active = models.BooleanField('activo', default=True)

    def __str__(self):
        return f'{self.name}'


class Table(models.Model):
    area = models.ForeignKey(Area, on_delete=models.PROTECT, related_name='table_set')
    label = models.CharField('etiqueta', max_length=32, unique=True)
    active = models.BooleanField('activo', default=True)

    def __str__(self):
        return f'{self.label}'


class Preparation(models.Model):
    name = models.CharField('nombre', max_length=128)
    active = models.BooleanField('activo', default=True)

    def __str__(self):
        return f'{self.name}'
