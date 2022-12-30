from django.shortcuts import render
from api.serializers import GroupSerializer
from rest_framework import viewsets
from ..models.group import Group

class GroupViewset(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class =  GroupSerializer