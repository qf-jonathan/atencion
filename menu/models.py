from django.db import models
from ambience.models import Preparation
from .validators import file_size


class Category(models.Model):
    name = models.CharField('nombre', max_length=128)
    active = models.BooleanField('activo', default=True)

    def __str__(self):
        return f'{self.name}'


class Item(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='item_set')
    destiny = models.ForeignKey(Preparation, on_delete=models.PROTECT, related_name='item_set')
    name = models.CharField('nombre', max_length=128)
    price = models.DecimalField('costo', max_digits=8, decimal_places=2)
    image = models.ImageField('imagen', upload_to='images/%Y%m%d/', validators=[file_size])
    active = models.BooleanField('activo', default=True)

    def __str__(self):
        return f'{self.name} {self.price}'
