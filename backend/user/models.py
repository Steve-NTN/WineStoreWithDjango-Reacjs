from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user_full_name = models.CharField(max_length=100, null=False)
    user_name = models.CharField(max_length=50, unique=True)
    user_password = models.CharField(max_length=50, null=False)
    user_email = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15, null=False)

    def __str__(self):
        return self.user_full_name