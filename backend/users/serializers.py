from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import ValidationError
from .models import User


class SignUpSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=128)
    email = serializers.CharField(max_length=128)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ["email", "username", "password"]

    def validate(self, attrs):
        email_exists = User.objects.filter(email=attrs["email"]).exists()
        username_exists = User.objects.filter(
            username=attrs["username"]).exists()
        if email_exists:
            raise ValidationError("Email has already been used")
        if username_exists:
            raise ValidationError("Username has already been used")
        return super().validate(attrs)

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = super().create(validated_data)
        user.set_password(password)
        user.save()
        Token.objects.create(user=user)
        return user


class CurrentUserPostSerializer(serializers.ModelSerializer):
    posts = serializers.StringRelatedField(many=True)

    class Meta:
        model = User
        fields = ["id", "email", "username", "posts"]
