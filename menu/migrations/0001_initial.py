# Generated by Django 3.0.3 on 2020-02-19 14:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ambience', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='nombre')),
                ('active', models.BooleanField(default=True, verbose_name='activo')),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='nombre')),
                ('price', models.DecimalField(decimal_places=2, max_digits=8, verbose_name='costo')),
                ('image', models.FileField(upload_to='images/%Y%m%d/', verbose_name='imagen')),
                ('active', models.BooleanField(default=True, verbose_name='activo')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='item_set', to='menu.Category')),
                ('destiny', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='item_set', to='ambience.Preparation')),
            ],
        ),
    ]
