from django.db import models

# Create your models here.
class Paciente(models.Model):
    idpaciente = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=300)
    fecha_nacimiento = models.DateField()
    telefono = models.PositiveIntegerField()
    Opciones = (("M", "Masculino"), ("F", "Femenino"), ("O", "Otro"))
    sexo =  models.CharField(max_length=1, choices=Opciones, blank=True, null=True)

    def __str__(self):
        fila = self.nombre 
        return fila


class Usuario(models.Model):
    idusuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=300)
    user = models.CharField(max_length=100)
    password = models.CharField(max_length=150)
    fecha_creacion = models.DateField(auto_now=True, auto_now_add=False)


    def __str__(self):
        fila =  self.nombre  + self.user
        return fila


class Cita(models.Model):
    idcita = models.AutoField(primary_key=True)
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, blank=False, null=False)
    fechacita = models.DateField(auto_now=True, auto_now_add=False)
    horacita = models.TimeField(auto_now=True, auto_now_add=False)
    preciocita = models.DecimalField(max_digits=10, decimal_places=2, default=0.0, blank=True)
    presionarterial = models.DecimalField(max_digits=10, decimal_places=2, default=0.0, blank=True)
    peso = models.DecimalField(max_digits=10, decimal_places=2, default=0.0, blank=True)
    temperatura = models.DecimalField(max_digits=10, decimal_places=2, default=0.0, blank=True)
    diagnostico = models.CharField(max_length=200)
    observaciones = models.CharField(max_length=500)

    def __str__(self):
        
        return f"{self.idcita}{self.Paciente}"

class Receta(models.Model):
    idreceta = models.AutoField(primary_key=True)
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, blank=False, null=False)
    fechareceta = models.DateField(auto_now=True, auto_now_add=False)
    medicamentos = models.CharField(max_length=200)
    tratamiento = models.CharField(max_length=300)

    def __str__(self):
        fila = "Tratamiento: " + self.tratamiento
        return fila