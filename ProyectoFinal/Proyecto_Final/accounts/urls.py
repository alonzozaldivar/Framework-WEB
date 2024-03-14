from django.urls import path
from accounts import views

urlpatterns = [
    # Se define una URL de la API de inicio de sesion
    path('api/login/', views.login_view, name='login'),
]
