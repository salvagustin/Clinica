from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import PacienteForm
from .forms import CitaForm
from .forms import RecetaForm
from .models import Paciente, Cita, Receta
from bootstrap_datepicker_plus.widgets import DatePickerInput





def inicio(request):
    return render(request,'paginas/index.html')


# VISTAS PARA PACIENTES--------------------------------------------------------------------------------------
def menupacientes(request):
    pacientes = Paciente.objects.all()
    return render(request,'pacientes/menupacientes.html', {'pacientes': pacientes})

def crearpaciente(request):
    formulariocrearpaciente = PacienteForm(request.POST or None)   
    if formulariocrearpaciente.is_valid():
        formulariocrearpaciente.save()
        return redirect('menupacientes')
    formulariocrearpaciente.fields["fecha_nacimiento"].widget=DatePickerInput(format="%d/%m/%Y")  
    return render(request,'pacientes/crearpaciente.html', {'formulariocrearpaciente': formulariocrearpaciente})

def editarpaciente(request, idpaciente):
    paciente = Paciente.objects.get(idpaciente=idpaciente)
    formularioeditarpaciente = PacienteForm(request.POST or None, instance=paciente)
    if formularioeditarpaciente.is_valid() and request.POST:
        formularioeditarpaciente.save()
        return redirect('menupacientes')
    return render(request,'pacientes/editarpaciente.html', {'formulariocrearpaciente': formularioeditarpaciente})

def eliminarpaciente(request, idpaciente):
    paciente = Paciente.objects.get(idpaciente=idpaciente)
    paciente.delete()
    return redirect('menupacientes') 


# VISTAS PARA PACIENTES--------------------------------------------------------------------------------------
def menucitas(request):
    citas = Cita.objects.all()
    return render(request,'citas/menucitas.html', {'citas': citas})



def crearcita(request):
    formulariocrearcita = CitaForm(request.POST or None)  

    if formulariocrearcita.is_valid():
        formulariocrearcita.save()
        return redirect('menucitas') 
    
    
    return render(request,'citas/crearcita.html', {'formulariocrearcita': formulariocrearcita})




def editarcita(request, idcita):
    cita = Cita.objects.get(idcita=idcita)
    formularioeditarcita = CitaForm(request.POST or None, instance=cita)
    if formularioeditarcita.is_valid() and request.POST:
        formularioeditarcita.save()
        return redirect('menucitas')
    return render(request,'citas/editarcita.html', {'formulariocrearcita': formularioeditarcita})

def eliminarcita(request, idcita):
    cita = Cita.objects.get(idcita=idcita)
    cita.delete()
    return redirect('menucitas') 



# VISTAS PARA RECETAS--------------------------------------------------------------------------------------
def menurecetas(request):
    recetas = Receta.objects.all()
    return render(request,'recetas/menurecetas.html', {'recetas': recetas})

def crearreceta(request):
    formulariocrearreceta = RecetaForm(request.POST or None)   
    if formulariocrearreceta.is_valid():
        formulariocrearreceta.save()
        return redirect('menurecetas')  
    return render(request,'recetas/crearreceta.html', {'formulariocrearreceta': formulariocrearreceta})

def editarreceta(request, idreceta):
    receta = Receta.objects.get(idreceta=idreceta)
    formularioeditarreceta = RecetaForm(request.POST or None, instance=receta)
    if formularioeditarreceta.is_valid() and request.POST:
        formularioeditarreceta.save()
        return redirect('menurecetas')
    return render(request,'recetas/editarreceta.html', {'formulariocrearreceta': formularioeditarreceta})

def eliminarreceta(request, idreceta):
    receta = Receta.objects.get(idreceta=idreceta)
    receta.delete()
    return redirect('menurecetas')