jQuery(document).ready(function($) {
	var idTimer;
	var contador = 0;
	// document.addEventListener("DOMContentLoaded", main, false);
	function main (){
		console.log('main');
		function cambiarCrono(){
			if (!idTimer) {
				arrancar();
				console.log('arrancar()');
			}
			else{
				parar();
				console.log('parar()');
			}
		};
		function limpiarCrono(){
			contador = 0;
			document.getElementById('crono').innerHTML = contador.toFixed(2);
		};
		function arrancar () {
			idTimer = setInterval(mostrar, 10);
		};
		function parar () {
			clearInterval(idTimer);
			idTimer = null;
		};
		function mostrar (){
			contador += 0.01;
			document.getElementById('crono').textContent = contador.toFixed(2);
		}
		$('#play').on('click', cambiarCrono);
		$('#reset').on('click', limpiarCrono);
		// document.getElementById('play').onclick = cambiarCrono;
		// document.getElementById('reset').onclick = limpiarCrono; 
	};
	main();
});