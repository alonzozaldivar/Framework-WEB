from rest_framework import serializers
from .models import *

# Tabla 1
class EntidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = entidad_F
        fields = '__all__'

# Tabla 2
class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ciudad
        fields = '__all__'

# Tabla 3
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = cliente
        fields = '__all__'

# Tabla 4
class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = venta
        fields = '__all__'

# Tabla 5
class PaqueteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = paqueteria
        fields = '__all__'

# Tabla 6
class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = estado
        fields = '__all__'

# Tabla 7
class EntregaSerializer(serializers.ModelSerializer):
    class Meta:
        model = entrega
        fields = '__all__'

# Tabla 8
class MetoPagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = metoPago
        fields = '__all__'

# Tabla 9
class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = pago
        fields = '__all__'

# Tabla 10
class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = categoria
        fields = '__all__'

# Tabla 11
class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = producto
        fields = '__all__'

# Tabla 12
class VentaProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = venta_producto
        fields = '__all__'

# Tabla 13
class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = proveedor
        fields = '__all__'

# Tabla 14
class CompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = compra
        fields = '__all__'

# Tabla 15
class CompraProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = compra_producto
        fields = '__all__'
