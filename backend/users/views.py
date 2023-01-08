from django.shortcuts import render
from .serializers import SignUpSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.request import Request

class SignUpView(generics.GenericAPIView):
    serializer_class=SignUpSerializer
    
    def post(self,request:Request):
        
        data = request.data
        
        serializer = self.serializer_class(data=data)
        # print(serializer.is_valid())
        if serializer.is_valid():
            print("entered here")
            serializer.save()
            response = {
                "message":"Successfully User Created",
                "data":serializer.data
            }
        
            return Response(data=response,status=status.HTTP_201_CREATED)
        
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)