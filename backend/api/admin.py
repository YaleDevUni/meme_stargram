from dataclasses import field
from django.contrib import admin
from .models import Group

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    field = ('name','location','description')
    list_display = ('id','name','location','description')
