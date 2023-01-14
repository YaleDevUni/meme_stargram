from dataclasses import field
from django.contrib import admin
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    field = ('id', 'username', 'datetime', 'img_url', 'tags', 'description')
    list_display = ('id', 'username', 'datetime',
                    'img_url', 'tags', 'description')
