# authenticate funciona para verificar las credenciales del usuario y login para iniciar sesion
from django.contrib.auth import authenticate, login
# Se importan para poder devolver respuestas JSON
from django.http import JsonResponse

# Define una funcion de vista, la cual manejara la solicitud de inicio de sesion
def login_view(request):
    # Verifica si la solicitud es de tipo POST
    if request.method == 'POST':
        username = request.POST.get('username') # Obtiene el nombre de usuario
        password = request.POST.get('password') # Obtiene la contraseña
        # Autentica al usuario utilizando el nombre y contraseña proporcionados
        user = authenticate(request, username=username, password=password)
        if user is not None: # Verifica si la autenticacion fue exitosa
            login(request, user) # Si la autenticacion es exitosa, inicia sesion para el usuario
            return JsonResponse({'success': True}) # Devuelve una respuesta indicando el exito de inicio de sesion
        else: # Pero si falla, devuelve una respuesta de error, indicando que las credenciales no son validas.
            return JsonResponse({'success': False, 'error':'Invalid credentials'}, status=400)
