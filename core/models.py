from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    BASIC = 1
    WAITER = 2
    CHEF = 3
    CHOICES = (
        (BASIC, 'Básico'),
        (WAITER, 'Mozo'),
        (CHEF, 'Cocinero'),
    )

    profile = models.IntegerField('perfil', choices=CHOICES, default=BASIC)
