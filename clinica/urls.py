"""
URL configuration for Pysio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from gestor.views import *
from gestor import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('gestor.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('', inicio),
    path('inicio/', inicio),
    path('estadisticas/', estadisticas),
    #DIRECCION PACIENTES
    path('pacientes/', ListaPacientes),
    path('agregarpaciente/', crear_paciente),
    path('editarpaciente/<int:pk>/', editar_paciente),
    path('eliminarpaciente/<int:pk>/', eliminar_paciente),
    path('historial/<int:pk>/', paciente_historial),
    path('buscarpaciente/<name>/', buscar_paciente),
    #DIRECCION CONSULTAS
    path('consultas/', ListaConsultas),
    path('agregarconsulta/', crear_consulta),
    path('editarconsulta/<int:pk>/', editar_consulta),
    path('eliminarconsulta/<int:pk>/', eliminar_consulta),
    path('buscarconsulta/<name>',buscar_consulta),
    #DIRECCION CITAS
    path('citas/', ListaCitas),
    path('agregarcita/', crear_cita),
    path('editarcita/<int:pk>/', editar_cita),
    path('eliminarcita/<int:pk>/', eliminar_cita),
    path('buscarsemana/<int:numano>/<int:numse>/', buscar_semana),
    #DIRECCION RECETAS
    path('recetas/', ListaRecetas),
    path('agregarreceta/', crear_receta),
    path('editarreceta/<int:pk>/', editar_receta),
    path('eliminarreceta/<int:pk>/', eliminar_receta),
    path('buscarreceta/<name>',buscar_receta),
]
