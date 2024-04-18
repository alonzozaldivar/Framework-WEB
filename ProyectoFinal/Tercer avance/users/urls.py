from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from users import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.LoginView.as_view()),
    path('refresh/', TokenRefreshView.as_view())
]
