from rest_framework import serializers
from models import Posting

# https://www.django-rest-framework.org/tutorial/1-serialization/

class PostingSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    username = serializers.CharField()                              # TODO: get current user's name
    datetime = serializers.DateTimeField()
    img_url = serializers.CharField()
    tag = serializers.CharField()
    description = serializers.CharField(required=False)

    class Meta:
        model = Posting
        fields = ['id','name','datetime','img_url','tag','description']
    
    def create(self, validated_data):
        return Posting.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.img_url = validated_data.get('img_url', instance.img_url)
        instance.tag = validated_data.get('tag', instance.tag)      # TODO: make tag as a hash
        instance.save()
        return instance

    # TODO: make real url validation
    def validate_img_url(self, value):
        if len(value['img_url']) == 0:
            raise serializers.ValidationError("Empty image URL given")
        return value