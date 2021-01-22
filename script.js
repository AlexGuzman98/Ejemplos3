/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: ----------------------------------------------------------
  
  Selecciona y loguea con console.log el <h3> que dice "Esto
  es una lista"
*/

let textoH3 = document.querySelector('h3');
console.log(textoH3.innerText);
/*
  EJERCICIO B: ----------------------------------------------------------
  
  Selecciona y loguea con console.log el primer y el ultimo elemento
  de la lista
*/
let primerNumero = document.querySelector('ul').firstElementChild;
console.log(primerNumero.innerText);
let ultimoNumero = document.querySelector('ul').lastElementChild;
console.log(ultimoNumero.innerText);
/*
  EJERCICIO C: ----------------------------------------------------------
  
  Selecciona y loguea con console.log el input de tipo "email" del
  formulario
*/
let input = document.getElementsByTagName('input');
console.log(input[2]);

/*
  EJERCICIO D: ----------------------------------------------------------
  
  Selecciona y loguea con console.log la fila de la tabla que tiene "JavaScript"
*/
let lista = document.getElementsByTagName('td');
console.log(lista[2].innerText);
/*
  EJERCICIO E: ----------------------------------------------------------
  
  Selecciona y loguea con console.log la celda que dice CSS
*/
let cssLista = document.getElementsByTagName('tr');
console.log(cssLista[3].innerText);
/*
  EJERCICIO F: ----------------------------------------------------------
  
  Investiga un metodo de algun elemento y trae un ejemplo de
  para que lo usarias
*/
