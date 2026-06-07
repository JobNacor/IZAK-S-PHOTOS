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
        self.assertEqual(response.json()["count"], 3)
