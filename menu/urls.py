from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'item', views.ItemViewSet)
router.register(r'category', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
