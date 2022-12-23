from dataclasses import field
from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fields = ['username', 'first_name', 'last_name', 'email', 'is_admin', 'last_login', 'date_joined']
    list_display = ['username', 'first_name', 'last_name', 'email', 'is_admin', 'last_login', 'date_joined']