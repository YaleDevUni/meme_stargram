from . import views
from django.urls import path

urlpatterns = [
    path("", views.PostListCreateView.as_view(), name="list_posts"),
    path("<int:pk>/", views.DeleteUpdateRetrievePostView.as_view(),
         name="post_detail"),
    path("current_user/", views.get_posts_for_current_user, name="current_user"),
    path("posts_for_current/", views.PostsListCurrentUser.as_view(),
         name="post_for_current"),
    path("posts_for/", views.PostsListForAuthor.as_view(),
         name="post_for_user"),
]
