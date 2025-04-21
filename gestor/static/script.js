/* VARIABLA PARA EVALUAR LOS INPUT VACIOS */
var exp = /^[W]{1}[K]{1}\d{2}-\d{4}$/



/* FUNCION PARA ELIMINAR REGISTROS */
function eliminarregistro(id,objeto,objeto2){
	swal({
		title: "Eliminar registro numero: "+ id+" ?",
		text: objeto +": "+objeto2,
		icon: "warning",
		buttons: true,
		dangerMode: false,
	})
		.then((OK) => {
			if (OK) {
				location.href="/eliminar"+objeto+"/"+id;
				
			} else {
				swal("Su registro No fue Eliminado");
			}
		});
	}
/*FUNCION PARA BUSCAR CITAS POR SEMANA*/
function buscarsemana(){
	const week = document.getElementsByName('week')[0].value;
	if( week == null || week.length == 0 || exp.test(week) ) {
		swal({
			title: "!Campo vacio!",
			text: "Seleccione una semana",
			timer: 2000,
			showConfirmButton: false});
	}else{
		numano = week.substr(0,4)
		numse = week.substr(6,2)
		location.href = "/buscarsemana/"+ numano + "/"+ numse
	}	
}
/*FUNCION PARA BUSCAR PACIENTE*/
function buscar_paciente(){
	const name = document.getElementsByName('nombre')[0].value;
	
	if( name == null || name.length == 0 || exp.test(name) ) {
		location.href = "/pacientes/"
		swal({
			title: "!Campo vacio!",
			text: "Escriba un nombre",
			timer: 5000,
			showConfirmButton: false});
			
	}else{
		location.href = "/buscarpaciente/"+ name
	}	
}

/*FUNCION PARA BUSCAR PACIENTE EN INDEX*/
function buscar_paciente_index(){
	const name = document.getElementsByName('nombre')[0].value;
	
	if( name == null || name.length == 0 || exp.test(name) ) {
		location.href = "/inicio/"
		swal({
			title: "!Campo vacio!",
			text: "Escriba un nombre",
			timer: 5000,
			showConfirmButton: false});	
	}else{
		location.href = "/buscarpacienteindex/"+ name 
	}	
}


/*FUNCION PARA BUSCAR CONSULTA POR PACIENTE*/
function buscar_consulta(){
	const name = document.getElementsByName('consulta')[0].value;
	if( name == null || name.length == 0 || exp.test(name) ) {
		swal({
			title: "!Campo vacio!",
			text: "Escriba un nombre",
			timer: 3000,
			showConfirmButton: false});
			location.href = "/consultas/"
	}else{
		location.href = "/buscarconsulta/"+ name
	}	
}
/*FUNCION PARA BUSCAR RECETA POR PACIENTE*/
function buscar_receta(){
	const name = document.getElementsByName('receta')[0].value;
	if( name == null || name.length == 0 || exp.test(name) ) {
		swal({
			title: "!Campo vacio!",
			text: "Escriba un nombre",
			timer: 3000,
			showConfirmButton: false});
			location.href = "/recetas/"
	}else{
		location.href = "/buscarreceta/"+ name
	}	
}


function consultadetalles(detalles){
	swal({
		title: "Detalles",
		text:  detalles});
	
}

//FUNCION PARA CREAR GRAFICO DE CONTEO DE CONSULTAS
const initChart = async () => {
	const chartDom = document.getElementById("chart");
	// Evita error si el elemento no existe
	if (!chartDom) return;
	try {
	  const response = await fetch("http://127.0.0.1:8000/get_chart/");
	  const option = await response.json();
	  const myChart = echarts.init(chartDom);
	  myChart.setOption(option);
	  myChart.resize();
	} catch (error) {
	  console.error("Error cargando el gráfico:", error);
	}
  };
  // Ejecuta cuando el DOM está completamente cargado
  window.addEventListener("DOMContentLoaded", initChart);


// FUNCIÓN PARA CREAR GRÁFICO DE SUMA DE GANANCIAS POR MES
const initChart2 = async () => {
	const chartDom = document.getElementById("chart2");
	// Evita error si el elemento no existe
	if (!chartDom) return;
	try {
	  const response2 = await fetch("http://127.0.0.1:8000/get_chart2/");
	  const option2 = await response2.json();
	  const myChart2 = echarts.init(chartDom);
	  myChart2.setOption(option2);
	  myChart2.resize();
	} catch (error) {
	  console.error("Error cargando el gráfico:", error);
	}
  };
  // Ejecuta cuando el DOM está completamente cargado
  window.addEventListener("DOMContentLoaded", initChart2);



  //FUNCION PARA CREAR GRAFICO DEL HOME
const initChart3 = async () => {
	const chartDom3 = document.getElementById("chart3");
	// Evita error si el elemento no existe
	if (!chartDom3) return;
	try {
	  const response3 = await fetch("http://127.0.0.1:8000/get_chart3/");
	  const option3 = await response3.json();
	  const myChart3 = echarts.init(chartDom3);
	  myChart3.setOption(option3);
	  myChart3.resize();
	} catch (error) {
	  console.error("Error cargando el gráfico:", error);
	}
  };
  // Ejecuta cuando el DOM está completamente cargado
  window.addEventListener("DOMContentLoaded", initChart3);


//FUNCION PARA CREAR GRAFICO DE EDADES
const initChart4 = async () => {
	const chartDom4 = document.getElementById("chart4");
	// Evita error si el elemento no existe
	if (!chartDom4) return;
	try {
	  const response4 = await fetch("http://127.0.0.1:8000/get_chart4/");
	  const option4 = await response4.json();
	  const myChart4 = echarts.init(chartDom4);
	  myChart4.setOption(option4);
	  myChart4.resize();
	} catch (error) {
	  console.error("Error cargando el gráfico:", error);
	}
  };
  // Ejecuta cuando el DOM está completamente cargado
  window.addEventListener("DOMContentLoaded", initChart4);

  //FUNCION PARA CREAR GRAFICO DE PACIENTES CON MAS CONSULTAS
const initChart5 = async () => {
	const chartDom5 = document.getElementById("chart5");
	// Evita error si el elemento no existe
	if (!chartDom5) return;
	try {
	  const response5 = await fetch("http://127.0.0.1:8000/get_chart5/");
	  const option5 = await response5.json();
	  const myChart5 = echarts.init(chartDom5);
	  myChart5.setOption(option5);
	  myChart5.resize();
	} catch (error) {
	  console.error("Error cargando el gráfico:", error);
	}
  };
  // Ejecuta cuando el DOM está completamente cargado
  window.addEventListener("DOMContentLoaded", initChart5);

  function calcularEdad(fechaStr) {
	const nacimiento = new Date(fechaStr);
	const hoy = new Date();
	let edad = hoy.getFullYear() - nacimiento.getFullYear();
	const m = hoy.getMonth() - nacimiento.getMonth();
	if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
	  edad--;
	}
	return edad;
  }
  
  function mostrarModalPaciente(button) {
	const paciente = {
	  id: button.getAttribute("data-id"),
	  nombre: button.getAttribute("data-nombre"),
	  fecha_nacimiento: button.getAttribute("data-fecha"),
	  telefono: button.getAttribute("data-telefono")
	};
  
	document.getElementById("pacienteNombre").innerText = paciente.nombre;
	document.getElementById("pacienteFechaNacimiento").innerText = paciente.fecha_nacimiento;
	document.getElementById("pacienteTelefono").innerText = paciente.telefono;
  
	const edad = calcularEdad(paciente.fecha_nacimiento);
	document.getElementById("pacienteEdad").innerText = edad;
  
	// Rutas
	document.getElementById("btnEditarPaciente").href = `/editarpaciente/${paciente.id}/`;
	document.getElementById("btnHistorial").href = `/historial/${paciente.id}/`;
  
	const btnEliminar = document.getElementById("btnEliminarPaciente");
	btnEliminar.onclick = () => eliminarregistro(paciente.id, "paciente", paciente.nombre);
  
	// Mostrar modal con Bootstrap
	const modal = new bootstrap.Modal(document.getElementById("modalPaciente"));
	modal.show();
  }
  
  function mostrarModalConsulta(button) {
	const consulta = {
	  id: button.getAttribute("data-id"),
	  nombre: button.getAttribute("data-nombre"),
	  fechaconsulta: button.getAttribute("data-fecha"),
	  precioconsulta: button.getAttribute("data-precioconsulta"),
	  peso: button.getAttribute("data-peso"),
	  altura: button.getAttribute("data-altura"),
	  temperatura: button.getAttribute("data-temperatura"),
	  presionarterial: button.getAttribute("data-presionarterial"),
	  diagnostico: button.getAttribute("data-diagnostico")
	};
  
	document.getElementById("consultaId").innerText = consulta.id;
	document.getElementById("consultaNombre").innerText = consulta.nombre;
	document.getElementById("consultaFechaconsulta").innerText = consulta.fechaconsulta;
	document.getElementById("consultaPrecioconsulta").innerText = consulta.precioconsulta;
	document.getElementById("consultaPeso").innerText = consulta.peso;
	document.getElementById("consultaAltura").innerText = consulta.altura;
	document.getElementById("consultaTemperatura").innerText = consulta.temperatura;
	document.getElementById("consultaPresionarterial").innerText = consulta.presionarterial;
	document.getElementById("consultaDiagnostico").innerText = consulta.diagnostico;
  
	// Rutas
	document.getElementById("btnEditarConsulta").href = `/editarconsulta/${consulta.id}/`;
  
	// Función para eliminar
	const btnEliminar = document.getElementById("btnEliminarConsulta");
	btnEliminar.onclick = () => eliminarregistro(consulta.id, "consulta", consulta.nombre);
  
	// Mostrar modal usando Bootstrap 5
	const modal = new bootstrap.Modal(document.getElementById("modalConsulta"));
	modal.show();
  }
   
  function mostrarModalReceta(button) {
	const receta = {
	  id: button.getAttribute("data-id"),
	  consulta: button.getAttribute("data-consulta"),
	  paciente: button.getAttribute("data-paciente"),
	  fechareceta: button.getAttribute("data-fechareceta"),
	  medicamento: button.getAttribute("data-medicamento"),
	  dosis: button.getAttribute("data-dosis"),
	  duracion: button.getAttribute("data-duracion"),
	  indicaciones: button.getAttribute("data-indicaciones")
	};
  
	document.getElementById("recetaId").innerText = receta.id;
	document.getElementById("recetaConsulta").innerText = receta.consulta;
	document.getElementById("recetaPaciente").innerText = receta.paciente;
	document.getElementById("recetaFecha").innerText = receta.fechareceta;
	document.getElementById("recetaMedicamento").innerText = receta.medicamento;
	document.getElementById("recetaDosis").innerText = receta.dosis;
	document.getElementById("recetaDuracion").innerText = receta.duracion;
	document.getElementById("recetaIndicaciones").innerText = receta.indicaciones;
  
	// Rutas
	document.getElementById("btnEditarReceta").href = `/editarreceta/${receta.id}/`;
	document.getElementById("btnImprimir").href = `/imprimirreceta/${receta.id}/`;
  
	const btnEliminar = document.getElementById("btnEliminarReceta");
	btnEliminar.onclick = () => eliminarregistro(receta.id, "receta", receta.paciente);
  
	// Mostrar modal con Bootstrap
	const modalElement = document.getElementById("modalReceta");
	const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
	modal.show();
  }
  