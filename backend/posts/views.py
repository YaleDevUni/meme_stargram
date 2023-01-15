from django.shortcuts import render
from .serializers import PostSerializer
from rest_framework import viewsets
from .models import Post
from rest_framework import status, generics, mixins
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import api_view, APIView
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from users.serializers import CurrentUserPostSerializer
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny,
    IsAuthenticatedOrReadOnly,
    IsAdminUser,
)


class PostListCreateView(generics.GenericAPIView,
                         mixins.ListModelMixin,
                         mixins.CreateModelMixin):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Post.objects.all()

    def perform_create(self, serializer):
        user = self.request.user
        print(user)
        serializer.save(author=user)
        return super().perform_create(serializer)

    def get(self, request: Request, *args, **kwargs):
        print("test")
        return self.list(request, *args, **kwargs)

    def post(self, request: Request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class DeleteUpdateRetrievePostView(generics.GenericAPIView,
                                   mixins.RetrieveModelMixin,
                                   mixins.UpdateModelMixin,
                                   mixins.DestroyModelMixin):

    serializer_class = PostSerializer

    queryset = Post.objects.all()

    def get(self, request: Request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request: Request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request: Request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

# todo get filtered objects for signed in user


@api_view(http_method_names=["GET"])
def get_posts_for_current_user(request: Request):
    user = request.user
    serializer = CurrentUserPostSerializer(instance=user)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(http_method_names=["GET"])
def random_posts(request: Request):
    posts = Post.objects.all()[:11]
    serializer = PostSerializer(instance=posts, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)
