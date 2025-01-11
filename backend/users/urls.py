from django.urls import path, include
from rest_framework import routers
from users.views.users import UserViewSet


from .views.users import Login


router = routers.DefaultRouter()

app_name = "users"


router = routers.DefaultRouter()
router.register(r"users", UserViewSet, basename="user")


urlpatterns = [
    path("", include(router.urls)),
    path("auth/login/", Login.as_view(), name="login"),  #
    path("users/", Login.as_view(), name="login"),  #
]
