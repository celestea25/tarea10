/*Agregue una variable más y concatene su valor a frase completa*/

let nombre = "Programación" + " Fácil";
let saludo = "Les doy la bienvenida a " ;
let saludo2=" Primera clase";
let fraseCompleta = saludo + nombre + saludo2;
console.log(fraseCompleta)

let frase = "JavaScript " + "es un lenguaje" + "esencial para crear" + " sitios web poderosos" + " Y muy divertidos";
console.log(frase);
/* Agregue un texto con un espacio entre los números y el texto*/
let numeroprimero1 = "10";
let numerosegundo2 = "20";
let numerotercero3 = "30";
let concatenaNumeros = "primer numero:"+ numeroprimero1 +"segundo numero:"+ numerosegundo2 + "tercer numero:" +numerotercero3;
console.log(concatenaNumeros);
/*pedido de nombre y edad*/
var nombre1=prompt("Cual es tu nombre ?")
console.warn(nombre1)

var edad=prompt("Cuantos años tenes?")
console.warn(edad)


let edad1;
let genero;
genero= prompt("elige tu genero fem o masc");
if(genero=="fem") {
    edad1=prompt("Cuantos años tenes?"); 
    if(edad1>=20 );
    alert("Sos mayor puedes ver esta pagina")} 
    else{
    alert("No puedes ver esta pagina, eres menor de edad");}
 
 if(genero=="masc"){
edad1=prompt("Cuantos años tenes?");
if (edad1>=18) {alert("Sos mayor puedes ver esta pagina");}
else{ alert("No puedes ver esta pagina, eres menor de edad");}
 }