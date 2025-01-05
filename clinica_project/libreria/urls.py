from django.urls import path
from.import views

urlpatterns = [
    path('', views.inicio, name='inicio'),

    #PATH PARA PACIENTES------------------------------------------------------------------------------------
    path('menupacientes', views.menupacientes, name='menupacientes'),
    path('pacientes/crearpaciente', views.crearpaciente, name='crearpaciente'),
    path('editarpaciente/<int:idpaciente>', views.editarpaciente, name='editarpaciente'),
    path('eliminarpaciente/<int:idpaciente>', views.eliminarpaciente, name='eliminarpaciente'),

     #PATH PARA CITAS------------------------------------------------------------------------------------
    path('menucitas', views.menucitas, name='menucitas'),
    path('citas/crearcita', views.crearcita, name='crearcita'),
    path('editarcita/<int:idcita>', views.editarcita, name='editarcita'),
    path('eliminarcita/<int:idcita>', views.eliminarcita, name='eliminarcita'),

     #PATH PARA RECETAS------------------------------------------------------------------------------------
    path('menurecetas', views.menurecetas, name='menurecetas'),
    path('recetas/crearreceta', views.crearreceta, name='crearreceta'),
    path('editarreceta/<int:idreceta>', views.editarreceta, name='editarreceta'),
    path('eliminarreceta/<int:idreceta>', views.eliminarreceta, name='eliminarreceta'),

   # path('imprimirreceta/', views.ListaRecetasListView.as_view(), name = 'imprimirreceta'),
    # path('imprimir/', views.ListRecetasPdf.as_view(), name = 'imprimir'),
    path('imprimirreceta/<int:idreceta>', views.imprimirreceta.as_view(), name='imprimirreceta'),
]