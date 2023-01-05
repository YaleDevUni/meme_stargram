from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from . import views

router = routers.DefaultRouter()
router.register('users', views.UserViewset, basename='users')

urlpatterns = router.urls
urlpatterns += [
    path('jwt/create/',TokenObtainPairView, name='jwt_create'),
    path('jwt/refresh/',TokenRefreshView, name='jwt_refresh'),
    path('jwt/verify/',TokenVerifyView, name='jwt_verify')
]
