from django.shortcuts import render
from .serializers import PostingSerializer
from rest_framework import viewsets
from .models import Posting

class PostingViewset(viewsets.ModelViewSet):
    postings = Posting.objects.all()
    serializer_class =  PostingSerializer