from dataclasses import field
from django.contrib import admin
from .models import Group

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    field = ('name','img_url','description','tag','datetime')
    list_display = ('id','name','img_url','description','tag','datetime')
