# from rest_framework import generics
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import *
from .serializers import *

# ------------------------- Tabla 1 -------------------------
class EntidadView(APIView):
    def get(self, request):
        entities = [{"clave": entities.clave,
                "name": entities.name}
            for entities in entidad_F.objects.all()]
        return Response(entities)

    def post(self, request):
        serializer = EntidadSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 2 -------------------------
class CiudadView(APIView):
    def get(self, request):
        citys = ciudad.objects.all()
        serializer = CiudadSerializer(citys, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CiudadSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 3 -------------------------
class ClienteView(APIView):
    def get(self, request):
        clientes = cliente.objects.all()
        serializer = ClienteSerializer(clientes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ClienteSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 4 -------------------------
class VentaView(APIView):
    def get(self, request):
        ventas = venta.objects.all()
        serializer = VentaSerializer(ventas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VentaSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 5 -------------------------
class PaqueteriaView(APIView):
    def get(self, request):
        packs = [{"clave": packs.clave,
                "name": packs.name}
            for packs in paqueteria.objects.all()]
        return Response(packs)

    def post(self, request):
        serializer = PaqueteriaSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 6 -------------------------
class EstadoView(APIView):
    def get(self, request):
        states = [{"codigo": states.codigo,
                "descripcion": states.descripcion}
            for states in estado.objects.all()]
        return Response(states)

    def post(self, request):
        serializer = EstadoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 7 -------------------------
class EntregaView(APIView):
    def get(self, request):
        entregas = entrega.objects.all()
        serializer = EntregaSerializer(entregas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EntregaSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 8 -------------------------
class MetoPagoView(APIView):
    def get(self, request):
        metos = [{"codigo": metos.codigo,
                "namePago": metos.namePago}
            for metos in metoPago.objects.all()]
        return Response(metos)

    def post(self, request):
        serializer = MetoPagoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 9 -------------------------
class PagoView(APIView):
    def get(self, request):
        pagos = pago.objects.all()
        serializer = PagoSerializer(pagos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PagoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 10 -------------------------
class CategoriaView(APIView):
    def get(self, request):
        cats = [{"clave": cats.clave,
                "name": cats.name,
                "descripcion": cats.descripcion}
            for cats in categoria.objects.all()]
        return Response(cats)

    def post(self, request):
        serializer = CategoriaSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 11 -------------------------
class ProductoView(APIView):
    def get(self, request):
        products = producto.objects.all()
        serializer = ProductoSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 12 -------------------------
class VentaProductoView(APIView):
    def get(self, request):
        vps = venta_producto.objects.all()
        serializer = VentaProductoSerializer(vps, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VentaProductoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 13 -------------------------
class ProveedorView(APIView):
    def get(self, request):
        provs = [{"codigo": provs.codigo,
                "name": provs.name}
            for provs in proveedor.objects.all()]
        return Response(provs)

    def post(self, request):
        serializer = ProveedorSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 14 -------------------------
class CompraView(APIView):
    def get(self, request):
        compras = compra.objects.all()
        serializer = CompraSerializer(compras, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompraSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

# ------------------------- Tabla 15 -------------------------
class CompraProductoView(APIView):
    def get(self, request):
        cps = compra_producto.objects.all()
        serializer = CompraProductoSerializer(cps, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompraProductoSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
