from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('product/', include('product.urls')),
    path('user/', include('user.urls')),
    path('auth/', obtain_auth_token),
    path('order/', include('order.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
