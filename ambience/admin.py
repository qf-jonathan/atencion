from django.contrib import admin
from .models import Area, Preparation, Table


class AmbienceAdmin(admin.ModelAdmin):
    list_display = ('name', 'active')


admin.site.register(Area, AmbienceAdmin)
admin.site.register(Preparation, AmbienceAdmin)
admin.site.register(Table)
