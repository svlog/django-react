from django.contrib import admin

# Register your models here.
from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email", "created_at", "updated_at")
    search_fields = ("username", "email")
    readonly_fields = ("created_at", "updated_at")
    ordering = ("created_at",)
