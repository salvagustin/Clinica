from django import forms
from .models import Paciente, Cita, Receta
from bootstrap_datepicker_plus.widgets import DatePickerInput



class PacienteForm(forms.ModelForm):
    class Meta:
        model = Paciente
        fields = ['nombre','telefono','sexo','fecha_nacimiento']
        widgets = {
            'fecha_nacimiento': DatePickerInput(format='%d/%m/%Y'),
        }
        

class CitaForm(forms.ModelForm):
    class Meta:
        model = Cita
        fields = '__all__'
       

class RecetaForm(forms.ModelForm):
    class Meta:
        model = Receta
        fields = '__all__'