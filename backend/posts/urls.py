from rest_framework import routers
# from .views import PostViewset, hompage
from . import views
from django.urls import path, include

# router = routers.DefaultRouter()
# router.register('posts', views.PostViewset, basename='posts')
# router.register('hompage/', hompage, basename='post_home')
# urlpatterns = router.urls
urlpatterns = [
    # path('posts/',views.PostViewset.as_view(),name="posts")
    path("homepage/", views.hompage, name="post_home"),
    path("listpost/", views.list_posts, name="list_posts")
]
