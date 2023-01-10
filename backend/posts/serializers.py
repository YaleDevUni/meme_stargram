from taggit.serializers import (TagListSerializerField, TaggitSerializer)
from rest_framework import serializers
from .models import Post
# https://www.django-rest-framework.org/tutorial/1-serialization/


class PostSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    # TODO: get current user's name
    username = serializers.CharField()
    datetime = serializers.DateTimeField()
    img_url = serializers.CharField()
    tags = TagListSerializerField()
    description = serializers.CharField(required=False)

    class Meta:
        model = Post
        # ('id','username','datetime','img_url','tags','description')
        fields = '__all__'

    # def create(self, validated_data):
    #     return Post.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     instance.img_url = validated_data.get('img_url', instance.img_url)
    #     instance.tag = validated_data.get('tag', instance.tag)      # TODO: make tag as a hash
    #     instance.save()
    #     return instance

    # # TODO: make real url validation
    # def validate_img_url(self, value):
    #     if len(value['img_url']) == 0:
    #         raise serializers.ValidationError("Empty image URL given")
    #     return value
