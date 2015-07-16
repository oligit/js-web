jQuery(document).ready(function($) {
	var oVentana;
	function abrirVentana (){
		oVentana = window.open('http://finofilipino.org', "oVentana", "width=700, height=700");
		console.log(oVentana);
	}
	function cerrarVentana (){
		oVentana.close();
	}
	$('#btna').on('click', abrirVentana);
	$('#btnb').on('click', cerrarVentana);
});