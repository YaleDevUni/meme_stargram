from django.shortcuts import render
from .serializers import PostSerializer
from rest_framework import viewsets
from .models import Post
from rest_framework import status, generics, mixins
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import api_view, APIView, permission_classes
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from users.serializers import CurrentUserPostSerializer
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny,
    IsAuthenticatedOrReadOnly,
    IsAdminUser,
)
from .permissions import AuthorOrReadOnly
from rest_framework.pagination import PageNumberPagination


class CustomPaginator(PageNumberPagination):
    """_summary_
    Custom pagination class
    """
    page_size = 5
    page_query_param = "page"
    page_size_query_param = "page_size"


class PostListCreateView(generics.GenericAPIView,
                         mixins.ListModelMixin,
                         mixins.CreateModelMixin):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    pagination_class = CustomPaginator
    queryset = Post.objects.all()

    def perform_create(self, serializer):
        user = self.request.user
        # user_name = self.request.user.username
        print(self.request.user.username)
        serializer.save(author=user)

        return super().perform_create(serializer)

    def get(self, request: Request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request: Request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class DeleteUpdateRetrievePostView(generics.GenericAPIView,
                                   mixins.RetrieveModelMixin,
                                   mixins.UpdateModelMixin,
                                   mixins.DestroyModelMixin):
    """_summary_
    example usage
    api url: localhost:8000/posts/9/
    post
    update
    delete
    """
    serializer_class = PostSerializer
    permission_classes = [AuthorOrReadOnly | IsAdminUser]
    queryset = Post.objects.all()

    def get(self, request: Request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request: Request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request: Request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class PostsListForAuthor(generics.GenericAPIView,
                         mixins.ListModelMixin):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        username = self.request. query_params. get("username") or None
        queryset = Post.objects.all()
        if username is not None:
            return Post.objects.filter(author__username=username)
        return queryset

    def get(self, request: Request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class PostsListCurrentUser(generics.GenericAPIView,
                           mixins.ListModelMixin):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)

    def get(self, request: Request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


@api_view(http_method_names=["GET"])
@permission_classes([IsAuthenticated])
def get_posts_for_current_user(request: Request):
    user = request.user
    serializer = CurrentUserPostSerializer(instance=user)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(http_method_names=["GET"])
@permission_classes([AllowAny])
def random_posts(request: Request):
    posts = Post.objects.all()[:11]
    serializer = PostSerializer(instance=posts, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)
