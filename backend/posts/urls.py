from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'posts', views.PostViewset, basename='posts')

urlpatterns = router.urls

# from django.urls import path
# from . import views

# urlpatterns = [
#     path('all', views.PostSerializer),
# ]