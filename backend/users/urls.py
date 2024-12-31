from django.urls import path, include
from rest_framework import routers
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from .views import UserViewSet

router = routers.DefaultRouter()

app_name = "users"

schema_view = get_schema_view(
    openapi.Info(
        title="Django REST API for managing users",
        default_version="v1",
        description="API for managing users",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@taskapi.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
)

router.register(
    r"users/get-users",
    UserViewSet,
    basename="users",
)

router.register(
    r"users/create-users",
    UserViewSet,
    basename="create-users",
)

router.register(
    r"users/update-users",
    UserViewSet,
    basename="update-users",
)

router.register(
    r"users/delete-users",
    UserViewSet,
    basename="delete-users",
)

urlpatterns = [
    path("", include(router.urls)),
    path(
        "docs/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
]
