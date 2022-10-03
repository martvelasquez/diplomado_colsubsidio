//let nombre = prompt("Cual es tu nombre?");
//alert("Hola " + nombre + ", Bienvenido a esta calculadora")
alert("Bienvenido a esta calculadora")
let numero1 = prompt("Cual es tu primer numero");
let numero2 = prompt("Cual es tu segundo numero");

let operacion = prompt("¿Digita el numero de la operacion que quiere realizar, 1 para Sumar, 2 para Restar, 3 para Multipliar o 4 para Dividir")

if (operacion == "1"){
  let resultado = parseInt(numero1) + parseInt(numero2)
  alert("El resultado de sumar "  + numero1 + " y " + numero2 + " es "  + resultado)

};
if (operacion == "2"){
  let resultado = parseInt(numero1) - parseInt(numero2)
  alert("El resultado de restar "  + numero1 + " y " + numero2 + " es " + resultado)

};

if (operacion == "3"){
  let resultado = parseInt(numero1) * parseInt(numero2)
  alert("El resultado de multiplicar "  + numero1 + " por " + numero2 + " es " + resultado)

};

if (operacion == "4"){
  let resultado = parseInt(numero1) / parseInt(numero2)
  alert("El resultado de dividir " + numero1 + " en " + numero2 + " es " + resultado)

  //console.log("El resultado es: " + resultado)

};

