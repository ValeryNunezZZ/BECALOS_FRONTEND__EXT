/*

Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/

class Libro{

    constructor(titulo, autor, anio, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;

        this.caps = [];
    }

    describirLibro() {
        console.log("TITULO: " + this.titulo + "\n" + "AUTOR: " + this.autor + "\n" + "AÑO: " + this.anio + "\n" + "ESTADO: " + this.estado + "\n\n");
    }

    agregarCapitulo(capitulo){
        this.caps.unshift(capitulo);
    }

    eliminarCapitulo(){
        this.caps.shift();
    }

    visualizarCapitulos(){

        if(this.caps.length == 0){
            console.log("\n\nNO HAY CAPÍTULOS AGREGADOS DEL LIBRO " + this.titulo + "\n");
        }else{
            console.log("\n\nCAPÍTULOS: " + this.titulo + "\n");

            for(let i=0 ; i<this.caps.length ; i++){
                console.log("* " + this.caps[i]);
            }
        }
    }
}

const l1 = new Libro("El principito", "Juanito Perez", 1990, "Disponible");
const l2 = new Libro("La viuda negra", "Valery Rosales", 2390, "Prestado");
const l3 = new Libro("Tres potrillos", "Fernanda Villa", 1990, "Disponible");
const l4 = new Libro("El origen", "Dan Brown", 2020, "Prestado");

l1.describirLibro();
l2.describirLibro();
l3.describirLibro()
l4.describirLibro();

l1.agregarCapitulo("Capitulo 1");
l1.agregarCapitulo("Capitulo 2");
l1.visualizarCapitulos();
l1.eliminarCapitulo();
l1.visualizarCapitulos();
l2.visualizarCapitulos();




