from rest_framework import serializers
from .models import cliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = cliente
        fields = [
            'noCliente',
            'name',
            'apPat',
            'apMat',
            'edad',
            'numCel',
            'email',
            'entidad_F',
            'ciudad',
            'colonia',
            'calle',
            'noCasa',
            'cp'
        ]

# los serializers siguen en proceso...