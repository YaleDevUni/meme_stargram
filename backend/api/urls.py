from django.db import router
# from django.conf.urls import url, include
from api import views
from rest_framework import routers
from django.contrib import admin
from django.urls import path,include,re_path


router= routers.DefaultRouter()
router.register(r'groups',views.GroupViewset)

urlpatterns = [
    # path(r'^',include(router.urls)),
    re_path(r'^',include(router.urls)),
]
