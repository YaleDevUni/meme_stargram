from django.shortcuts import render
from .serializers import PostSerializer
from rest_framework import viewsets
from .models import Post

# Root
class PostViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer