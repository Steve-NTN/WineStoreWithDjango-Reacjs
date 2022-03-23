from re import template
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ntnwine/', include('ntnwine.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
