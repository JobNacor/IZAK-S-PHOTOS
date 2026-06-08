from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


FEATURED_PHOTOS = [
    {
        "id": "natural-light-portraits",
        "title": "Natural Light Portraits",
        "category": "Portraits",
        "year": "2026",
        "location": "Studio / Natural Light",
        "description": "A quiet portrait series shaped by soft light, honest expression, and clean direction.",
    },
    {
        "id": "founder-editorial",
        "title": "Founder Editorial",
        "category": "Commercial",
        "year": "2026",
        "location": "Brand Campaign",
        "description": "Elevated imagery for founders, creators, and brands that need confidence without noise.",
    },
    {
        "id": "after-hours",
        "title": "After Hours",
        "category": "Events",
        "year": "2026",
        "location": "Private Reception",
        "description": "Documentary-style event coverage focused on atmosphere, movement, and real emotion.",
    },
    {
        "id": "warm-studio-profile",
        "title": "Warm Studio Profile",
        "category": "Portraits",
        "year": "2026",
        "location": "Editorial Portrait",
        "description": "An intimate studio portrait built around warmth, texture, and a natural connection.",
    },
    {
        "id": "quiet-presence",
        "title": "Quiet Presence",
        "category": "Portraits",
        "year": "2026",
        "location": "Personal Session",
        "description": "Minimal portrait direction that lets the subject carry the frame with stillness.",
    },
    {
        "id": "studio-language",
        "title": "Studio Language",
        "category": "Editorial",
        "year": "2026",
        "location": "Creative Direction",
        "description": "A cinematic editorial study of gaze, shadow, skin texture, and controlled contrast.",
    },
]


@api_view(["GET"])
def health_check(request):
    return Response({"status": "ok", "service": "izaks-photos-api"})


@api_view(["GET"])
def photo_collection(request):
    return Response({"count": len(FEATURED_PHOTOS), "results": FEATURED_PHOTOS})


@api_view(["POST"])
def contact_inquiry(request):
    required_fields = ["name", "email", "message"]
    missing_fields = [field for field in required_fields if not request.data.get(field)]

    if missing_fields:
        return Response(
            {
                "status": "error",
                "message": "Missing required fields.",
                "fields": missing_fields,
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    return Response(
        {
            "status": "received",
            "message": "Inquiry received. This development endpoint does not send email yet.",
            "inquiry": {
                "name": request.data.get("name"),
                "email": request.data.get("email"),
                "project_type": request.data.get("projectType", "General inquiry"),
            },
        },
        status=status.HTTP_201_CREATED,
    )

# Create your views here.
