from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response
# Create your views here.

class CountryViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    queryset = Country.objects.all()
    serializers_class = CountrySerializer

    def list(self, request):
        queryset = Country.objects.all()
        serializers = self.serializers_class(queryset,  many=True)
        return Response(serializers.data)

class LeagueViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    queryset = League.objects.all()
    serializers_class = LeagueSerializer

    def list(self, request):
        queryset = League.objects.all()
        serializers = self.serializers_class(queryset,  many=True)
        return Response(serializers.data)

class CharacteristicViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    queryset = Characteristic.objects.all()
    serializers_class = CharacteristicSerializer

    def list(self, request):
        queryset = Characteristic.objects.all()
        serializers = self.serializers_class(queryset,  many=True)
        return Response(serializers.data)

