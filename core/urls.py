from django.urls import path, include
from .views import Login, Logout, Profile, NavTabs

urlpatterns = [
    path('login/', Login.as_view(), name='api_login'),
    path('logout/', Logout.as_view(), name='api_logout'),
    path('profile/', Profile.as_view(), name='api_profile'),
    path('nav_tabs/', NavTabs.as_view(), name='api_nav_tabs'),
    path('ambience/', include('ambience.urls')),
    path('order/', include('order.urls')),
    path('menu/', include('menu.urls')),
]
