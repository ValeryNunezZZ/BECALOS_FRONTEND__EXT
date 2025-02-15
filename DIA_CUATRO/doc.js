/*
Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.*/

let librosLeidos = [];

const agregarLibro = (titulo) => {

    librosLeidos.unshift(titulo);
}

const mostrarLibrosLeidos = () => {
    
    if(librosLeidos.length == 0) console.log("NO HAY LIBROS EN EL ARREGLO");

    else{

        console.log("LIBROS LEIDOS\n");
        for(let i=0 ; i<librosLeidos.length ; i++){
            console.log(librosLeidos[i]);
        }
    }
    
}


agregarLibro("El principito");
mostrarLibrosLeidos();