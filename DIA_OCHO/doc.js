const enviar = document.querySelector(".enviar_button");

let puedoEliminar = false;
let contador = 0;
let primer

function hayComentarios(){
    let nhc = document.querySelector(".noHayComentarios");
    if(contador == 0){
        nhc.style.display = "block";
    }else{
        nhc.style.display = "none";
    }
}

enviar.addEventListener("click", ()=>{

    let v = validacionEntradas();

    
    if(v){

        contador++;
        hayComentarios();

        let contenedorMensajes = document.querySelector(".mesagess_container");
        let mensaje = document.querySelector(".mensajito");
        let userName = document.querySelector(".userName");

        var div = document.createElement("div");
        div.classList.add("message_container");


        const date = new Date();
        


        div.innerHTML = `<div class="container_data">
            <div class="data">
                <div class="img_perfil">
                    <img src="./img/profile-icon-avatar-icon-user-icon-person-icon-free-png.webp">
                </div>
                <div class="info">
                    <span class="nombre_usuario">${userName.value}</span>
                    <span class="fecha_comentario">${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}</span>
                    <span class="hora">${date.getHours() % 12 || 12} : ${date.getHours()}</span>
                </div>
            </div>
            <div class="boton_container">
                <input class="eliminar_button" onclick="eliminar()" type="button" value="Eliminar">
            </div>
        </div>
        <div class="message">
            ${mensaje.value}
        </div>`;

        div.onclick = quitarComentario;
        contenedorMensajes.appendChild(div);
    }

    
    
});

function quitarComentario(){
    if(puedoEliminar){
        contador--;
        hayComentarios();
        document.querySelector(".mesagess_container").removeChild(this);
        puedoEliminar = false;
    }
}


function eliminar(){
    puedoEliminar = true;
}

function validacionEntradas(){

    const userName = document.querySelector(".userName");
    const texArea = document.querySelector(".mensajito");

    if(userName.value != "" && texArea.value != ""){
        return true;
    }else{
        alert("Llena todos los campos :)");
        return false;
    }
}