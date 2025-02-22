const enviar = document.querySelector(".enviar");
const nombreUsuario = document.querySelector(".nombre_usuario");
const textarea = document.querySelector(".textarea");
const todos = document.getElementById("todos");

let cont = 0;
let idContainer = 0;
let reiniciar = true;

enviar.addEventListener("click", ()=>{

    let nombre = nombreUsuario.value;
    let comment = textarea.value;

    if(nombre == "" || comment == ""){
        alert("Favor de llenar ambos campos :)");
    }else{

        cont++;

        if(cont != 0 && reiniciar){
            document.querySelector(".todos_los_comentarios").innerHTML = ``;
            reiniciar = false;
        }
        const currentDate = new Date();
        console.log(currentDate);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const dayOfMonth = currentDate.getDate();
        
        let m;

        switch(month){
            case 1:
                m = "January";
                break;
            case 2:
                m = "February";
                break;
            case 3:
                m = "March";
                break;
            case 4:
                m = "April";
                break;
            case 5:
                m = "May";
                break;
            case 6:
                m = "June";
                break;
            case 7:
                m = "July";
                break;
            case 8:
                m = "August";
                break;
            case 9:
                m = "September";
                break;
            case 10:
                m = "October";
                break;
            case 11:
                m = "November";
                break;
            case 12:
                m = "December";
                break;
        }

        var nuevo = document.createElement("div");
        nuevo.classList.add("comentario-container");
        nuevo.innerHTML = `<div class='datos'>`+
        `<div class='left'>`+
            `<div class='foto-de-perfil'>`+
                `<img src='./img/blank-profile-picture-973460_1280.webp'>`+
            `</div>`+
            `<div class='mini_texto'>`+
                `<span class='nombre'>${nombre}</span>`+
                `<span class='fecha'>${dayOfMonth} ${m} ${year}</span>`+
            `</div>`+
        `</div>`+
        `<div class='right'>`+
            `<input class='eliminar' onclick='quitar()' type='button' value='Eliminar'>`+
        `</div>`+
        `</div>`+

        `<div class='comentario'>${comment}`+
        `</div>`;
        nuevo.onclick = quitarLlamado;
        document.querySelector(".todos_los_comentarios").appendChild(nuevo);

    }
});

let porEliminar;
let clikeado = false;

//setTimeout(quitar(), 1000);


function quitar(){
    clikeado = true;

}

function quitarLlamado(){
    if(clikeado == true){
        document.querySelector(".todos_los_comentarios").removeChild(this);
        cont--;
        clikeado = false;

        if(cont == 0){
            document.querySelector(".todos_los_comentarios").innerHTML = `No hay comentarios...`;
            reiniciar = true;
        }
    }
}

