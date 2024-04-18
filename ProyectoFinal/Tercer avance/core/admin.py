from django.contrib import admin

from .models import *

# TABLA 1
@admin.register(entidad_F)
class entidad_F(admin.ModelAdmin):
    list_display = [
        "clave",
        "name",
    ]

# TABLA 2
@admin.register(ciudad)
class ciudad(admin.ModelAdmin):
    list_display = [
        "noCiudad",
        "name",
        "entidad_F",
    ]

# TABLA 3
@admin.register(cliente)
class cliente(admin.ModelAdmin):
    list_display = [
        "noCliente",
        "name",
        "apPat",
        "apMat",
        "numCel",
        "email",
        "entidad_F",
        "ciudad",
        "colonia",
        "calle",
        "noCasa",
    ]

# TABLA 4
@admin.register(venta)
class venta(admin.ModelAdmin):
    list_display = [
        "noVenta",
        "cliente",
        "totalPagar",
        "fecha",
    ]

# TABLA 5
@admin.register(paqueteria)
class paqueteria(admin.ModelAdmin):
    list_display = [
        "clave",
        "name",
    ]

# TABLA 6
@admin.register(estado)
class estado(admin.ModelAdmin):
    list_display = [
        "codigo",
        "descripcion",
    ]

# TABLA 7
@admin.register(entrega)
class entrega(admin.ModelAdmin):
    list_display = [
        "noEntrega",
        "estado",
        "paqueteria",
        "venta",
        "fechaSalida",
        "fechaEntrega",
    ]

# TABLA 8
@admin.register(metoPago)
class metoPago(admin.ModelAdmin):
    list_display = [
        "codigo",
        "namePago",
    ]

# TABLA 9
@admin.register(pago)
class pago(admin.ModelAdmin):
    list_display = [
        "noPago",
        "venta",
        "metoPago",
        "fecha",
    ]

# TABLA 10
@admin.register(categoria)
class categoria(admin.ModelAdmin):
    list_display = [
        "clave",
        "name",
        "descripcion",
    ]

# TABLA 11
@admin.register(producto)
class productos(admin.ModelAdmin):
    list_display = [
        "sku",
        "imagen",
        "categoria",
        "name",
        "descripcion",
        "precioVen",
        "stock",
    ]

# TABLA 12
@admin.register(venta_producto)
class venta_productos(admin.ModelAdmin):
    list_display = [
        "venta",
        "productos",
        "cantidad",
        "importe",
    ]

# TABLA 13
@admin.register(proveedor)
class proveedor(admin.ModelAdmin):
    list_display = [
        "codigo",
        "name",
    ]

# TABLA 14
@admin.register(compra)
class compra(admin.ModelAdmin):
    list_display = [
        "noCompra",
        "proveedor",
        "fecha",
        "totalPago",
    ]
        
# TABLA 15
@admin.register(compra_producto)
class compra_productos(admin.ModelAdmin):
    list_display = [
        "productos",
        "compra",
        "cantidad",
        "precioCom",
    ]
