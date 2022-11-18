from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='SearchTree'),
    path('db/', views.mongodb, name="mongodb"),
]