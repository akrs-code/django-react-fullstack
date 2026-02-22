from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response

# Create your views here.
class CountryViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Country.objects.all()
    serializers_class = CountrySerializer

    def list(self, request):
        queryset = Country.objects.all()
        serializers = self.serializers_class(queryset, many=True)
        return Response(serializers.data)


class LeagueViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = League.objects.all()
    serializers_class = LeagueSerializer

    def list(self, request):
        queryset = League.objects.all()
        serializers = self.serializers_class(queryset, many=True)
        return Response(serializers.data)


class CharacteristicViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Characteristic.objects.all()
    serializers_class = CharacteristicSerializer

    def list(self, request):
        queryset = Characteristic.objects.all()
        serializers = self.serializers_class(queryset, many=True)
        return Response(serializers.data)


class FootBallClubViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = FootballClubSerializer

    def list(self, request):
        queryset = FootballClub.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
