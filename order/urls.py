from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'invoice', views.InvoiceViewSet)
router.register(r'detail', views.DetailViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
