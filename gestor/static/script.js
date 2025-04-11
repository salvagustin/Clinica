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
	const response = await fetch("http://127.0.0.1:8000/get_chart/");
	const option = await response.json();
	const myChart = echarts.init(document.getElementById("chart"));
	myChart.setOption(option);
	myChart.resize();
  };
  window.addEventListener("load", initChart);

  //FUNCION PARA CREAR GRAFICO SUMA DE GANANCIAS POR MES
  const initChart2 = async () => {
	const response2 = await fetch("http://127.0.0.1:8000/get_chart2/");
	const option2 = await response2.json();
	const myChart2 = echarts.init(document.getElementById("chart2"));
	myChart2.setOption(option2);
	myChart2.resize();
  };
  window.addEventListener("load", initChart2);

  //FUNCION PARA CREAR GRAFICO DEL HOME
  const initChart3 = async () => {
	const response3 = await fetch("http://127.0.0.1:8000/get_chart3/");
	const option3 = await response3.json();
	const myChart3 = echarts.init(document.getElementById("chart3"));
	myChart3.setOption(option3);
	myChart3.resize();
  };
  window.addEventListener("load", initChart3);


//FUNCION PARA CREAR GRAFICO DE EDADES
  const initChart4 = async () => {
	const response4 = await fetch("http://127.0.0.1:8000/get_chart4/");
	const option4 = await response4.json();
	const myChart4 = echarts.init(document.getElementById("chart4"));
	myChart4.setOption(option4);
	myChart4.resize();
  };
  window.addEventListener("load", initChart4);