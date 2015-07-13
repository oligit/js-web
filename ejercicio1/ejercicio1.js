window.onload = function (){
	var btnAlert = function (){
		alert('Hola!');
	};
	document.getElementById('btn').addEventListener('click', btnAlert, false);
}