from rest_framework import serializers
from ..models.group import Group

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model= Group
        fields = ('id','name','img_url','description','tag','datetime')
        