/*
Comparaciones y decisiones en JavaScript
En este proyecto, practicarás los conceptos básicos de variables, comparaciones y toma de decisiones en JavaScript que has visto hasta este momento.

Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Evaluador de Notas con Mensajes Personalizados
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.
Instrucciones (pistas) para resolver el problema:
Declara una variable llamada nota y asígnale un valor numérico entre 0 y 100.Puede ser un valor aleatorio (opcional).
Usa una condición if para verificar si el valor de nota es mayor que 0 (truthy).
Utiliza operadores de comparación (<,>, <=, >=) para determinar el rango de la nota.
Imprime en la consola un mensaje que indique la nota que obtuvo el alumno.
Adicionalmente - Prueba diferentes valores para la variable nota (por ejemplo, 45, 60, 75, 0) para ver cómo cambia el resultado.
Entregables
Para este proyecto, debes compartir la URL del archivo en el repositorio creado con la solución del problema descrito. Si tienes alguna duda de este ejercicio, no dudes en consultarla con tu sensei para que quede claro. También puedes solicitar una asesoría.

Crea un nuevo archivo a tu repositorio en tu equipo local para solucionar el problema planteado.
Crea un 'commit' en tu repositorio con este archivo para guardar los cambios crear una nueva versión de tu repositorio.
Si quieres agrega otro(s) archivo(s) que tengas con ejemplos de la clase o con algún ejemplo que tú hayas intentado mucho mejor.
Comparte la liga de Github del archivo agregado a tu repositorio con la solución.

*/


/*
Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.
*/

let calificacion = prompt("INGRESA CALIFICACIÓN: ");

if(calificacion >= 90){
    alert("EXCELENTE DESEMPEÑO :D");
}else if(calificacion >= 75 && calificacion < 90){
    alert("BIEN HECHO :)");
}else if(calificacion >= 60 && calificacion < 75){
    alert("SUFICIENTE c:");
}else{
    alert("ÉCHALE MÁS GANAS :(");
}