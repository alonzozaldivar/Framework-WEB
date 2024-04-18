from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(User)
class User(admin.ModelAdmin):
    list_display = [
        "email",
        "name",
        "last_name",
        "avatar",
        "date_join",
        "is_staff",
    ]
