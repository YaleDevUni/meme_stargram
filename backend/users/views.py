from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import viewsets,generics,status
from rest_framework.response import Response
from rest_framework.request import Request
from .models import User

# Root
class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self,request:Request):
        data = request.data
        serializer = self.serializer_class(data=data)
        
        if serializer.is_valid():
            serializer.save()
            
            response={
                "message": "User created successfully",
                "data": serializer.data
            }
            
            return Response(data=response,status=status.HTTP_201_CREATE)
        
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    # TODO: password encryption
    