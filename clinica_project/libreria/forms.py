from django import forms
from .models import Paciente, Cita, Receta
from bootstrap_datepicker_plus.widgets import DatePickerInput



class PacienteForm(forms.ModelForm):
    class Meta:
        model = Paciente
        fields = '__all__'
       
        
class CitaForm(forms.ModelForm):
    class Meta:
        model = Cita
        fields = '__all__'
       

class RecetaForm(forms.ModelForm):
    class Meta:
        model = Receta
        fields = '__all__'