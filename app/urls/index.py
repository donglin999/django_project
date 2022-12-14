from django.urls import path, include
from app.views.index import index


urlpatterns = [
    path("", index, name="index"),
    path("menu/", include("app.urls.menu.index")),
    path("playground/", include("app.urls.playground.index")),
    path("settings/", include("app.urls.settings.index")),
]
