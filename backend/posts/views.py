from django.shortcuts import render
from django.http import HttpRequest, JsonResponse
from .serializers import PostSerializer
from rest_framework import viewsets
from .models import Post
from rest_framework import status
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import api_view

temp_post = [{
    "id": 1,
    "username": "yessil",
                "datetime": "2023-01-09T06:36:27.128426Z",
                "img_url": "dasd",
                "tags": [
                    "is",
                    "my",
                    "tag",
                    "this"
                ],
    "description": "asdf"
},
    {
    "id": 2,
    "username": "aaaaaassay",
                "datetime": "2023-01-09T08:03:12.682959Z",
                "img_url": "asdsad",
                "tags": [
                    "asd"
                ],
    "description": "asdasd"
}]
# Root


@api_view(http_method_names=["GET", "POST"])
def hompage(request: Request):
    if request.method == "POST":
        data = request.data
        response = {"message": "this is my message from api", "data": data}
        return Response(data=response, status=status.HTTP_201_CREATED)
    response = {"message": "this is my message from api"}
    return Response(data=response, status=status.HTTP_200_OK)


@api_view(http_method_names=["GET"])
def list_posts(request: Request):
    return Response(data=temp_post, status=status.HTTP_200_OK)


class PostViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
