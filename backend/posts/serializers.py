from taggit.serializers import (TagListSerializerField, TaggitSerializer)
from rest_framework import serializers
from .models import Post
# https://www.django-rest-framework.org/tutorial/1-serialization/


class PostSerializer(serializers.ModelSerializer):
    # # TODO: get current user's name
    tags = TagListSerializerField()

    class Meta:
        model = Post
        # ('id','username','datetime','img_url','tags','description')
        fields = '__all__'
