from django.test import TestCase
from django.urls import reverse


class ApiSmokeTests(TestCase):
    def test_health_check(self):
        response = self.client.get(reverse("api-health"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["status"], "ok")

    def test_photo_collection(self):
        response = self.client.get(reverse("api-photos"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["count"], 6)

    def test_contact_inquiry(self):
        response = self.client.post(
            reverse("api-contact"),
            data={
                "name": "Izak",
                "email": "izak@example.com",
                "projectType": "Portrait Sessions",
                "message": "I want a new session.",
            },
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["status"], "received")

    def test_contact_inquiry_requires_fields(self):
        response = self.client.post(
            reverse("api-contact"),
            data={"name": "Izak"},
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 400)
