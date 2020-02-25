from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'invoice', views.InvoiceViewSet)
router.register(r'detail', views.DetailViewSet)
router.register(r'invoice_save', views.InvoiceSaveViewSet, basename='invoice-save')

urlpatterns = [
    path('', include(router.urls)),
    path('invoice_delete/<int:invoice_id>/', views.InvoiceStateUpdateView.as_view(), name='invoice-save-delete'),
]
