document.addEventListener("DOMContentLoaded", main, false);
function Crono (position) {
	this.idTimer = 0;
	this.contador = 0;
	this.position = position;
};
Crono.prototype.mostrar = function(){
	this.contador += 0.01;
	document.getElementById('crono').textContent = this.contador.toFixed(2);
};
Crono.prototype.arrancar = function(){
	this.idTimer = setInterval(this.mostrar.bind(this), 10);	
};
Crono.prototype.limpiarCrono = function(){
	this.contador = 0;
	document.getElementById('crono').innerHTML = this.contador.toFixed(2);
	console.log(this.contador.toFixed(2));
};
Crono.prototype.cambiarCrono = function(){
	if (!this.idTimer) {
		this.arrancar();
		console.log('arrancar()');
	}else{
		this.parar();
		console.log('parar()');
	}
};
Crono.prototype.parar = function () {
	clearInterval(this.idTimer);
	this.idTimer = null;
};

function main (){
	var cr1 = new Crono();
	console.log(cr1);	

	document.getElementById('play').onclick = cr1.cambiarCrono.bind(cr1);
	document.getElementById('reset').onclick = cr1.limpiarCrono.bind(cr1);
};