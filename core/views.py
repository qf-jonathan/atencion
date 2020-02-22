from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.status import HTTP_200_OK


class Login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        content = {
            'token': token.key,
            'profile': {
                'id': token.user.profile,
                'profile': token.user.get_profile_display()
            }
        }
        return Response(content)


class Logout(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        request.user.auth_token.delete()
        return Response(status=HTTP_200_OK)


class Profile(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {
            'id': request.user.profile,
            'profile': request.user.get_profile_display()
        }
        return Response(content)
