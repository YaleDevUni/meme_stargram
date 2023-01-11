from django.shortcuts import render
from .serializers import PostSerializer
from rest_framework import viewsets
from .models import Post
from rest_framework import status
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404


# Root


@api_view(http_method_names=["GET", "POST"])
def hompage(request: Request):
    if request.method == "POST":
        data = request.data
        response = {"message": "this is my message from api", "data": data}
        return Response(data=response, status=status.HTTP_201_CREATED)
    response = {"message": "this is my message from api"}
    return Response(data=response, status=status.HTTP_200_OK)


@api_view(http_method_names=["GET", "POST"])
def list_posts(request: Request):
    posts = Post.objects.all()

    if request.method == "POST":
        data = request.data
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            response = {
                "message": "Post Created",
                "data": serializer.data
            }
            return Response(data=response, status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    serializer = PostSerializer(instance=posts, many=True)

    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(http_method_names=["GET"])
def post_detail(request: Request, post_id: int):
    post = get_object_or_404(Post, pk=post_id)
    serializer = PostSerializer(instance=post)
    response = {
        "message": "data",
        "data": serializer.data
    }
    return Response(data=response, status=status.HTTP_200_OK)


@api_view(http_method_names=["PUT"])
def update_post(request: Request, post_id: int):
    post = get_object_or_404(Post, pk=post_id)
    data = request.data
    serializer = PostSerializer(instance=post, data=data)
    if serializer.is_valid():
        serializer.save()
        response = {
            "message": "Post Updated",
            "data": serializer.data
        }
        return Response(data=response, status=status.HTTP_200_OK)


@api_view(http_method_names=["DELETE"])
def delete_post(request: Request, post_id: int):
    post = get_object_or_404(Post, pk=post_id)
    post.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


# class PostViewset(viewsets.ModelViewSet):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
