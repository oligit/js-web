// var saludar = function () {
// 	var enIngles = function () {
// 		alert('hola');
// 	};
// };
// saludar().enIngles; //así se ejecuta

/* ****************************************************** */
// var fecha = new Date();
// console.log(fecha); // Thu Jul 16 2015 11:29:33 GMT+0200 (Hora de verano romance)
// console.log(fecha.toUTCString()); //Thu, 16 Jul 2015 09:29:33 GMT
// console.log(fecha.toTimeString()); // 11:29:33 GMT+0200 (Hora de verano romance)

/* ****************************************************** */
// var x = new String('Hola');
// x.valor = 'algo';
// var y = 'Hola';
// y.valor = 'algo';
// console.log(x); //String {0: "H", 1: "o", 2: "l", 3: "a", valor: "algo", length: 4, [[PrimitiveValue]]: "Hola"}
// console.log(x.valor); // algo
// console.log(y); // Hola
// console.log(y.valor); // undefined

/* ****************************************************** */
// USO DE PROTOTYPE
// function Persona (n, a) {
// 	this.nombre = n;
// 	this.apellido = a; //se pone this para que cuelgue de cada objeto que creemos, no de Persona
// 	this.saludar = function () {
// 		alert('Hola, soy '+this.nombre);
// 	};
// };
// Persona.prototype.decirHola = function(){ //SE ponen así los metodos porque van a tener el mismo comportamiento en cada objeto de la misma clase
// 	alert('Hola soy'+this.nombre+' '+this.apellido);
// };
// p1 = new Persona('pepe', 'perez');
// p1.decirHola();// hola soy pepe
// console.log(p1.nombre);
// console.log(p1.decirHola());

/* ****************************************************** */
// VARIABLES PRIVADAS
// function Persona (n, a) {
// 	var nombre = n; //variable local, no se tiene acceso alegremente desde la funcion decir hola.
// 	this.apellido = a; 
// 	this.saludar = function () {
// 		alert('Hola, soy '+nombre);
// 	};
// 	this.get = function (x) {
// 		return eval(x);
// 	};
// };
// Persona.prototype.decirHola = function(){ 
// 	alert('Hola, soy '+this.get('nombre')+' '+this.apellido);
// };
// p1 = new Persona('pepe', 'perez');
// // p1.decirHola();// hola soy pepe
// // console.log(p1.getPropiedad(nombre));
// p1.decirHola();

//// ó !!!!!!!!!!!!!!!

// function Persona (n, a) {
// 	var prv = {'nombre': n}; // al definir este objeto se puede sacar por el get en lugar que el eval() que puede ser peligroso...
// 	this.apellido = a; 
// 	this.saludar = function () {
// 		alert('Hola, soy '+nombre);
// 	};
// 	this.get = function (x) {
// 		return prv[x]; // alternativa a eval()
// 	};
// };
// Persona.prototype.decirHola = function(){ 
// 	alert('Hola, soy '+this.get('nombre')+' '+this.apellido);
// };
// p1 = new Persona('pepe', 'perez');
// // p1.decirHola();// hola soy pepe
// p1.decirHola();
// console.log(p1.get('nombre'));

/* ****************************************************** */
// CALLBACKS

// function one (){
// 	return 1;
// }
// function two (){
// 	return 2;
// }
// function invoke_and_restar (a, b){
// 	return a() + b();
// }
// console.log(invoke_and_restar(one, two));

/* ****************************************************** */
//CLOSURES

// var x = function (){
// 	function miFuncion (){
// 		return 4;
// 	};
// 	return miFuncion;
// };
// console.log(x.miFuncion()); //no rula :|

/* ****************************************************** */
// CREAR NODOS
//se borra con remove child
var parrafo = document.createElement("p");
var contenido = document.createTextNode("hola mundo");
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);

/* ****************************************************** */
//MODIFICAR NODOS 
// text content -> texto 
// innerHTML -> html y texto plano

