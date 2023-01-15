from django.db import models
from taggit.managers import TaggableManager
from django.contrib.auth import get_user_model

User = get_user_model()


class Post(models.Model):
    datetime = models.DateTimeField(auto_now_add=True)
    img_url = models.CharField(max_length=2048, null=False)
    description = models.CharField(max_length=2048, null=True)
    # models.CASCADE => delete user implies delete all posts belong to the user
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='posts', null=True)
    # comma seperated input
    tags = TaggableManager()

    # stringfy tag, img_url, a post link
    def __str__(self) -> str:
        return self.img_url
