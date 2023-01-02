from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    username = models.CharField(max_length=128, unique=True)
    first_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128)
    email = models.CharField(max_length=128, unique=True)
    password = models.CharField(max_length=128)
    is_admin = models.BooleanField(null=True)
    is_superuser = models.BooleanField()
    last_login = models.DateTimeField(auto_now_add=True)
    date_joined = models.DateTimeField(auto_now=True, auto_now_add=False)
    # not used columns at the moment