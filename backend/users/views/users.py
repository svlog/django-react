# users/views.py
from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from ..serializers.user import UserSerializer

from django.contrib.auth.models import User


class Login(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "access_token": str(refresh.access_token),
                    "refresh_token": str(refresh),
                }
            )
        else:
            return Response(
                {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
