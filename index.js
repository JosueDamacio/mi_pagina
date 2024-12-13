//console.log(document)
/* esto sirve para que se reemplaze la primer etiqueta "a" por "otro texto" */
//document.querySelector('a').textContent = 'OTRO TEXTO'
//console.log(document.querySelector('a'))
/*para acceder a una clase, de una etiqueta, usamos */
//console.log(document.querySelector('.auxilio'))
/*para obtener un elemento por su ID */
//console.log(document.getElementById("unId"))
/*selecciona a todos los de la misma clase */
//console.log(document.querySelectorAll('a'))

/*ELEMENTOS modifica su clases, agrega clases y demas*/

//const parrafo = document.querySelectorAll('.a')
//parrafo.textContent = "texto distinto"
//no anda xd

let numRandom = Math.floor(Math.random() * 100) + 1;
let numIntentos = 0;
let maxIntentos = 6;

while (numIntentos < maxIntentos) {
  let numIngresado = parseInt(prompt("Ingresa un número entre 1 y 100 (te quedan " + (maxIntentos - numIntentos) + " intentos):"));

  if (numIngresado === numRandom) {
    alert("Correcto!!");
    break;
  }

  if (numIngresado > numRandom) {
    alert("Te pasaste...");
  } else {
    alert("Aún te falta...");
  }

  numIntentos++;

  if (numIntentos === maxIntentos) {
    alert("Te quedaste sin intentos, la respuesta es: " + numRandom + ".");
  }
}