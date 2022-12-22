from dataclasses import field
from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(UserAdmin):
    model = User

admin.site.register(User, UserAdmin)