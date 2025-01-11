"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from users.views.users import Login
from rest_framework.routers import DefaultRouter
from rest_framework.views import APIView
from rest_framework.response import Response
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

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


class ApiRootView(APIView):
    def get(self, request):
        return Response({})


router = DefaultRouter()

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("users.urls")),
    path("", include(router.urls)),
    path(
        "docs/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
]
