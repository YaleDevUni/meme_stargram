from django.shortcuts import render
from api.serielizers import GroupSerializer
from rest_framework import viewsets
from .models import Group

class GroupViewset(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class =  GroupSerializer