from django.contrib import admin
from .models import Usuario
from .models import Receta
from .models import Cita
from .models import Paciente

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Receta)
admin.site.register(Cita)
admin.site.register(Paciente)