from django.urls import path
from .views import HelloView, Logout, Profile
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('hello/', HelloView.as_view(), name='hello'),
    path('login/', obtain_auth_token, name='api_login'),
    path('logout/', Logout.as_view(), name='api_logout'),
    path('profile/', Profile.as_view(), name='api_profile'),
]
