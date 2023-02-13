from django.contrib.auth.models import AbstractUser
from django. contrib.auth.base_user import BaseUserManager
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self,email,password,**extra_fields):
        email= self.normalize_email(email)
        user= self.model(
            email=email,
            **extra_fields
        )
        user.set_password(password)
        user.save()
        return user
        
    def create_superuser(self,email,password,**extra_fields):
        # extra_fields is dictionary
        extra_fields.setdefault("is_staff",True)
        extra_fields.setdefault("is_superuser",True)
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_staff being true")
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_superuser being true")
        return self.create_user(email=email,password=password,**extra_fields)

class User(AbstractUser):
    username = models.CharField(max_length=128, unique=True)
    email = models.CharField(max_length=128, unique=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(auto_now_add=True)
    date_joined = models.DateTimeField(auto_now=True, auto_now_add=False)

    objects=CustomUserManager()
    # choose email or username to login field
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    def __str__(self) -> str:
        return self.username