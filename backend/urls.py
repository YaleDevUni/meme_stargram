#######################################################
# Combined url configuration to pass to the URL config
# This gathers all urls from all apps living in backend
#######################################################

from rest_framework import routers
from posts.views import PostViewset
# from users.views import UserViewset

router = routers.DefaultRouter()
router.register('posts', PostViewset, basename='posts')
# router.register('users', UserViewset, basename='users')

urlpatterns = router.urls