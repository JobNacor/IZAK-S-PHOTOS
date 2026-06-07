from rest_framework.decorators import api_view
from rest_framework.response import Response


FEATURED_PHOTOS = [
    {
        "id": "portrait-session",
        "title": "Portrait Session",
        "category": "Portraits",
        "description": "Clean editorial portraits with controlled light and natural direction.",
    },
    {
        "id": "city-story",
        "title": "City Story",
        "category": "Lifestyle",
        "description": "Warm street photography focused on movement, texture, and candid emotion.",
    },
    {
        "id": "creative-detail",
        "title": "Creative Detail",
        "category": "Commercial",
        "description": "Product and brand details composed for campaigns, menus, and social media.",
    },
]


@api_view(["GET"])
def health_check(request):
    return Response({"status": "ok", "service": "izaks-photos-api"})


@api_view(["GET"])
def photo_collection(request):
    return Response({"count": len(FEATURED_PHOTOS), "results": FEATURED_PHOTOS})

# Create your views here.
