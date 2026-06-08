from django.contrib import admin
from django.urls import path

from api.views import contact_inquiry, health_check, photo_collection


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health_check, name="api-health"),
    path("api/photos/", photo_collection, name="api-photos"),
    path("api/contact/", contact_inquiry, name="api-contact"),
]
