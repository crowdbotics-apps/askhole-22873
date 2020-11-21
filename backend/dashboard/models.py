from django.conf import settings
from django.db import models

# Create your models here.

LEVEL_CHOICES = (("easy", "Easy"), ("medium", "Medium"), ("hard", "Hard"))


class Exercises(models.Model):
    cardNumbers = models.IntegerField(
        null=True,
        blank=True,
    )
    cardText = models.TextField(
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.name

    def __str__(self):
        return self.name
