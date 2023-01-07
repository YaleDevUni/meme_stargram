from rest_framework import serializers
from rest_framework.validators import ValidationError
from .models import User

class SignUpSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=128)
    email = serializers.CharField(max_length=128)
    password = serializers.CharField(min_length=8,write_only=True)
    
    class Meta:
        model = User
        fields = ["email","username","password"]
        # not working for now, need solve it to avoid internal sever errors
        # 
        def validate(self, attrs):
            email_exists=User.objects.filter(email=attrs["email"]).exists()
            if email_exists:
                raise ValidationError(_("Email has already been used"),code="invalid")
            return super().validate(attrs)
        
    # last_login = serializers.DateTimeField(auto_now_add=True)
    # date_joined = serializers.DateTimeField(auto_now=True, auto_now_add=False)