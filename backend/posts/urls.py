from rest_framework import routers
# from .views import PostViewset, hompage
from . import views
from django.urls import path, include

# router = routers.DefaultRouter()
# urlpatterns = router.urls
urlpatterns = [
    path("", views.PostView.as_view(), name="list_posts"),
    path("<int:post_id>/", views.DeleteUpdateRetrievePostView.as_view(),
         name="post_detail"),
]
