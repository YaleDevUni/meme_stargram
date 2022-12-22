from django.db import models

class Posting(models.Model):
    username = models.CharField(max_length=128, null=False, unique=False)
    datetime = models.DateTimeField(auto_now=True, auto_now_add=False)
    img_url = models.CharField(max_length=256, null=True)                   # Support only shortUrl?
    description = models.CharField(max_length=256, null=False, unique=False)
    tag = models.CharField(max_length=512,null=True,unique=False)           # 32 bytes * maximum 16 tags