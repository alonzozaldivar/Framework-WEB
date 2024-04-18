from django.db import models
from django.conf import settings
import os

# En este archivo se ven los modelos a utilizar

# TABLA 1
class entidad_F(models.Model):
    clave = models.CharField('Clave:', primary_key=True, max_length=6)
    name = models.CharField('Entidad Federativa:', max_length=32)

    def __str__(self):
        return self.name

# TABLA 2
class ciudad(models.Model):
    noCiudad = models.CharField('No. Ciudad:', primary_key=True, max_length=10)
    name = models.CharField('Ciudad:', max_length=32)
    entidad_F = models.ForeignKey(entidad_F, on_delete = models.CASCADE)

    def __str__(self):
        return self.name

# TABLA 3
class cliente(models.Model):
    noCliente = models.CharField('No. Cliente:', max_length=8, primary_key=True)
    name = models.CharField('Nombre(s):', max_length=64)
    apPat = models.CharField('Apellido Paterno:', max_length=32)
    apMat = models.CharField('Apellido Materno:', max_length=32)
    edad = models.IntegerField('Edad:', default=0)
    numCel = models.CharField('Teléfono:', max_length=20)
    email = models.CharField('Email:', max_length=32)
    entidad_F = models.ForeignKey(entidad_F, on_delete = models.CASCADE)
    ciudad = models.ForeignKey(ciudad, on_delete = models.CASCADE)
    colonia = models.CharField('Colonia:', max_length=32)
    calle = models.CharField('Calle:', max_length=32)
    noCasa = models.CharField('No. Casa:', max_length=8)
    cp = models.CharField('CP:', max_length=5)

    def __str__(self):
        return self.name

# TABLA 4
class venta(models.Model):
    noVenta = models.CharField('No. Venta:', max_length=8, primary_key=True)
    cliente = models.ForeignKey(cliente, on_delete = models.CASCADE)
    totalPagar = models.FloatField('Total a pagar:', default=0.00)
    fecha = models.DateField('Fecha de Venta:', auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.cliente.name

# TABLA 5
class paqueteria(models.Model):
    clave = models.CharField('Clave:', primary_key=True, max_length=4)
    name = models.CharField('Nombre Paqueteria:', max_length=32, default="paqueteria")

    def __str__(self):
        return self.name

# TABLA 6
class estado(models.Model):
    codigo = models.CharField('Código:', primary_key=True, max_length=3)
    descripcion = models.CharField('Descripción:', max_length=16, default="descripcion...")

    def __str__(self):
        return self.codigo

# TABLA 7
class entrega(models.Model):
    noEntrega = models.CharField('No. Entrega:', primary_key=True, max_length=8)
    estado = models.ForeignKey(estado, on_delete = models.CASCADE)
    paqueteria = models.ForeignKey(paqueteria, on_delete = models.CASCADE)
    venta = models.ForeignKey(venta, on_delete = models.CASCADE)
    fechaSalida = models.DateField('Fecha de Salida:') #
    fechaEntrega = models.DateField('Fecha de Entrega:') #

    def __str__(self):
        return self.noEntrega

# TABLA 8
class metoPago(models.Model):
    codigo = models.CharField('Código:', primary_key=True, max_length=5)
    namePago = models.CharField('Metodo de Pago:', max_length=32)

    def __str__(self):
        return self.namePago

# TABLA 9
class pago(models.Model):
    noPago = models.CharField('No. Pago:', primary_key=True, max_length=8)
    venta = models.ForeignKey(venta, on_delete = models.CASCADE)
    metoPago = models.ForeignKey(metoPago, on_delete = models.CASCADE)
    fecha = models.DateField('Fecha de Pago', auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.noPago

# TABLA 10
class categoria(models.Model):
    clave = models.CharField('Clave:', primary_key=True, max_length=4)
    name = models.CharField('Categoria:', max_length=32, default="categoria")
    descripcion = models.CharField('Descripcion:', max_length=360, default="Descripcion...")

    def __str__(self):
        return self.name

# TABLA 11
class producto(models.Model):
    sku = models.CharField('SKU:', max_length=8, primary_key=True)
    imagen = models.ImageField('Imagen:', upload_to='Productos/', blank=False, null=False, default='/ImagenDefault.jpg')
    categoria = models.ForeignKey(categoria, on_delete = models.CASCADE)
    name = models.CharField('Producto:', max_length=64, default="nombre del producto")
    descripcion = models.CharField('Descripcion:', max_length=200, default="Descripcion...")
    precioVen = models.FloatField('Precio:', default=0.00)
    stock = models.IntegerField('Stock:', default=0)

    def __str__(self):
        return self.name

# TABLA 12 - codigo
class venta_producto(models.Model):
    venta = models.ForeignKey(venta, on_delete = models.CASCADE)
    productos = models.ForeignKey(producto, on_delete = models.CASCADE)
    cantidad = models.CharField('Cantidad:', max_length=16)
    importe = models.FloatField('Importe:', default=0.00)

    def __str__(self):
        return self.cantidad

# TABLA 13
class proveedor(models.Model):
    codigo = models.CharField('Código:', primary_key=True, max_length=8)
    name = models.CharField('Proovedor:', max_length=32, default="nombre del proveedor")

    def __str__(self):
        return self.name

# TABLA 14
class compra(models.Model):
    noCompra = models.CharField('No. Compra:', primary_key=True, max_length=8)
    proveedor = models.ForeignKey(proveedor, on_delete = models.CASCADE)
    fecha = models.DateField('Fecha de Compra:', auto_now=True, auto_now_add=False)
    totalPago = models.FloatField('Total del Pago:', default=0.00)

    def __str__(self):
        return self.noCompra
        
# TABLA 15 - codigo
class compra_producto(models.Model):
    productos = models.ForeignKey(producto, on_delete = models.CASCADE)
    compra = models.ForeignKey(compra, on_delete = models.CASCADE)
    cantidad = models.IntegerField('Cantidad:', default=0)
    precioCom = models.FloatField('Precio Compra:', default=0.00)

    def __str__(self):
        return self.cantidad
