from rest_framework import routers
from .views import PostViewset
from django.urls import path

router = routers.DefaultRouter()
router.register('posts', PostViewset, basename='posts')

urlpatterns = router.urls
