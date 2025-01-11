from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "date_joined",
            "password",
            "is_staff",
        ]

    def create(self, validated_data):

        password = validated_data.pop("password", None)
        user = User.objects.create(**validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data["username"], password=data["password"])
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        return user

    def save(self):

        user = self.validated_data

        refresh = RefreshToken.for_user(user)
        jwt_access_token = str(refresh.access_token)

        return {
            "user": user,
            "token": str(refresh),
            "jwt_access_token": jwt_access_token,
        }
