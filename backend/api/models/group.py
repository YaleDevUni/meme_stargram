from django.db import models

# Create your models here.

class Group(models.Model):
    name = models.CharField(max_length=32, null=False, unique = False)
    img_url = models.CharField(max_length=256, null=True)
    description = models.CharField(max_length=256, null=False, unique = False)
    tag = models.CharField(max_length=10,null=True,unique=False)
    datetime = models.DateTimeField(auto_now=True, auto_now_add=False)
    class Meta:
        unique_together = (('name','datetime'))