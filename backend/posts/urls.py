from rest_framework import routers
# from .views import PostViewset, hompage
from . import views
from django.urls import path, include

# router = routers.DefaultRouter()
# urlpatterns = router.urls
urlpatterns = [
    path("homepage/", views.hompage, name="post_home"),
    path("", views.list_posts, name="list_posts"),
    path("<int:post_id>/", views.post_detail, name="post_detail"),
    path("update/<int:post_id>/", views.update_post, name="update_post"),
    path("delete/<int:post_id>/", views.delete_post, name="delete_post")
]
