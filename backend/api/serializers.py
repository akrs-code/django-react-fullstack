from rest_framework import serializers
from .models import Country, League, Characteristic, FootballClub


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ("id", "name")


class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ("id", "name")


class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristic
        fields = ("id", "name")


class FootballClubSerializer(serializers.ModelSerializer):
    league_details = LeagueSerializer(source="league", read_only=True)
    country_details = CountrySerializer(source="country", read_only=True)
    characteristic_details = CharacteristicSerializer(
        source="characteristic",
        many=True,
        read_only=True
    )

    class Meta:
        model = FootballClub
        fields = (
            "id",
            "name",
            "city",
            "description",
            "attendance",
            "league_details",
            "country_details",
            "characteristic_details",
        )