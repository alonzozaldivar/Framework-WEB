"""URL configuration for axyz project.
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from core.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),

    path('api/entidades/', EntidadView.as_view(), name='table1'),
    path('api/ciudades/', CiudadView.as_view(), name='table2'),
    path('api/clientes/', ClienteView.as_view(), name='table3'),
    path('api/ventas/', VentaView.as_view(), name='table4'),
    path('api/paqueterias/', PaqueteriaView.as_view(), name='table5'),
    path('api/estados/', EstadoView.as_view(), name='table6'),
    path('api/entregas/', EntregaView.as_view(), name='table7'),
    path('api/metodosPago/', MetoPagoView.as_view(), name='table8'),
    path('api/pagos/', PagoView.as_view(), name='table9'),
    path('api/categorias/', CategoriaView.as_view(), name='table10'),
    path('api/productos/', ProductoView.as_view(), name='table11'),
    path('api/ventas-productos/', VentaProductoView.as_view(), name='table12'),
    path('api/proveedores/', ProveedorView.as_view(), name='table13'),
    path('api/compras/', CompraView.as_view(), name='table14'),
    path('api/compras-productos/', CompraProductoView.as_view(), name='table15'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
