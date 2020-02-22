from django.urls import path
from .views import Login, Logout, Profile

urlpatterns = [
    path('login/', Login.as_view(), name='api_login'),
    path('logout/', Logout.as_view(), name='api_logout'),
    path('profile/', Profile.as_view(), name='api_profile'),
]
