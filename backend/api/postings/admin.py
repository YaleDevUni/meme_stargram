from dataclasses import field
from django.contrib import admin
from .models import Posting

@admin.register(Posting)
class PostingAdmin(admin.ModelAdmin):
    field = ['id','name','datetime','img_url','tag','description']
    list_display = ['id','name','datetime','img_url','tag','description']