from rest_framework import serializers
from models import User

# https://www.django-rest-framework.org/tutorial/1-serialization/

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.CharField()
    password = serializers.CharField()
    is_admin = serializers.BooleanField()
    last_login = serializers.DateTimeField()
    date_joined = serializers.DateTimeField()

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password', 'is_admin', 'last_login', 'date_joined']
    
    def create(self, validated_data):
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.save()
        return instance

    ###########################################################
    # TODO: Write authentication
    #
    # https://docs.djangoproject.com/en/4.1/topics/auth/default/
    #
    # from django.contrib.auth import authenticate
    # user = authenticate(username='john', password='secret')
    # if user is not None:
    #     # A backend authenticated the credentials
    # else:
    #     # No backend authenticated the credentials
    #
    ###########################################################

    ###########################################################
    # TODO: Write validations
    ###########################################################