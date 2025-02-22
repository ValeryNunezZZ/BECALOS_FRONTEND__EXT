const enviar = document.querySelector(".enviar");
const container = document.querySelector(".todos_los_comentarios");
const nombreUsuario = document.querySelector(".nombre_usuario");
const textarea = document.querySelector(".textarea");

let cont = 0;

enviar.addEventListener("click", ()=>{

    if(cont == 0){
        container.innerHTML = ``;
        cont++;
    }

    let nombre = nombreUsuario.value;
    let comment = textarea.value;

    container.innerHTML += `<div class='comentario-container'>`+
    `<div class='datos'>`+
        `<div class='left'>`+
            `<div class='foto-de-perfil'>`+
                `<img src='./img/blank-profile-picture-973460_1280.webp'>`+
            `</div>`+
            `<div class='mini_texto'>`+
                `<span class='nombre'>${nombre}</span>`+
                `<span class='fecha'>35 Aug 2020</span>`+
            `</div>`+
        `</div>`+
        `<div class='right'>`+
            `<input class='eliminar' type='button' value='Eliminar'>`+
        `</div>`+
    `</div>`+

    `<div class='comentario'>${comment}`+
    `</div>`+
    `</div>`;



});