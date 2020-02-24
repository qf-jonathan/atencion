from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'table', views.TableViewSet)
router.register(r'area', views.AreaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]