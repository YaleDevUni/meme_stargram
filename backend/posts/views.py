from django.shortcuts import render
from .serializers import PostSerializer
from rest_framework import viewsets
from .models import Post
from rest_framework import status
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import api_view, APIView
from django.shortcuts import get_object_or_404


# Root .
class PostView(APIView):
    """_summary_
    A View for Signed in User View.
    Contains customized listing and creation posts 
    """
    serializer_class = PostSerializer

    def get(self, request: Request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = self.serializer_class(instance=posts, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request: Request, *args, **kwargs):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            response = {
                "message": "Post Created",
                "data": serializer.data
            }
            return Response(data=response, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteUpdateRetrievePostView(APIView):
    serializer_class = PostSerializer

    def get(self, request: Request, post_id: int):
        post = get_object_or_404(Post, pk=post_id)
        serializer = self.serializer_class(instance=post)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request: Request, post_id: int):
        post = get_object_or_404(Post, pk=post_id)
        data = request.data
        serializer = self.serializer_class(instance=post, data=data)
        if serializer.is_valid():
            serializer.save()
            response = {
                "message": "Post Updated",
                "data": serializer.data
            }
            return Response(data=response, status=status.HTTP_200_OK)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request: Request, post_id: int):
        post = get_object_or_404(Post, pk=post_id)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class GeneralPostView(APIView):
    """_summary_
    View for Unsigned User or General View.
    Default Authentication Method is None, 
    so do not grant here any post method 
    """

    pass


@api_view(http_method_names=["GET"])
def random_posts(request: Request):
    posts = Post.objects.all()[:11]
    serializer = PostSerializer(instance=posts, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)
