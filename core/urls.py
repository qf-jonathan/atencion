from django.urls import path
from .views import Login, Logout, Profile, NavTabs

urlpatterns = [
    path('login/', Login.as_view(), name='api_login'),
    path('logout/', Logout.as_view(), name='api_logout'),
    path('profile/', Profile.as_view(), name='api_profile'),
    path('nav_tabs/', NavTabs.as_view(), name='api_nav_tabs'),
]
