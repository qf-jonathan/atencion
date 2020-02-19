from django.contrib import admin
from .models import Invoice, Detail


class DetailAdmin(admin.ModelAdmin):
    list_display = ('invoice', 'item', 'state')
    readonly_fields = ('state',)


admin.site.register(Invoice)
admin.site.register(Detail, DetailAdmin)
