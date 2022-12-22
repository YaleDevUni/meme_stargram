from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import viewsets
from .models import User

class UserViewset(viewsets.ModelViewSet):
    users = User.objects.all()
    serializer_class =  UserSerializer