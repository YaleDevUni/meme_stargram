from rest_framework import routers
from .views import PostViewset

router = routers.DefaultRouter()
router.register('posts', PostViewset, basename='posts')

urlpatterns = router.urls