from django.db import models
from taggit.managers import TaggableManager

class Post(models.Model):
    username = models.CharField(max_length=128, null=False, unique=False)
    datetime = models.DateTimeField(auto_now_add=True)
    img_url = models.CharField(max_length=2048, null=True)                   # Support only shortUrl?
    description = models.CharField(max_length=256, null=False, unique=False)
    # comma seperated input
    tags = TaggableManager()