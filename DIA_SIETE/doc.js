const checkListItems = document.querySelectorAll(".check_list_item");
const bars = document.querySelectorAll(".bar"); 
let checked = 0;

checkListItems[0].addEventListener("click",()=>{

        checked = 0;
    
        if(checkListItems[0].checked){
            checked++;
        }

        checar();

        if(checkListItems[1].checked){
            checked++;
        }

        checar();

        if(checkListItems[2].checked){
            checked++;
        }

        checar();

        if(checkListItems[3].checked){
            checked++;
        }

        checar();
        checarList();
    }
);

checkListItems[1].addEventListener("click",()=>{

    checked = 0;
    
    if(checkListItems[0].checked){
        checked++;
    }

    checar();

    if(checkListItems[1].checked){
        checked++;
    }

    checar();

    if(checkListItems[2].checked){
        checked++;
    }

    checar();

    if(checkListItems[3].checked){
        checked++;
    }

    checar();
    checarList();
}
);

checkListItems[2].addEventListener("click",()=>{

    checked = 0;
    
    if(checkListItems[0].checked){
        checked++;
    }

    checar();

    if(checkListItems[1].checked){
        checked++;
    }

    checar();

    if(checkListItems[2].checked){
        checked++;
    }

    checar();

    if(checkListItems[3].checked){
        checked++;
    }

    checar();
    checarList();
}
);

checkListItems[3].addEventListener("click",()=>{

    checked = 0;
    
    if(checkListItems[0].checked){
        checked++;
    }

    checar();

    if(checkListItems[1].checked){
        checked++;
    }

    checar();

    if(checkListItems[2].checked){
        checked++;
    }

    checar();

    if(checkListItems[3].checked){
        checked++;
    }

    checar();
    checarList();
}
);

function checar(){
    if(checked == 1){
        bars[0].style.backgroundColor = "red";
        bars[1].style.backgroundColor = "transparent";
        bars[2].style.backgroundColor = "transparent";
        bars[3].style.backgroundColor = "transparent";
    }else if(checked == 2){
        bars[0].style.backgroundColor = "orange";
        bars[1].style.backgroundColor = "orange";
        bars[2].style.backgroundColor = "transparent";
        bars[3].style.backgroundColor = "transparent";
    }else if(checked == 3){
        bars[0].style.backgroundColor = "yellow";
        bars[1].style.backgroundColor = "yellow";
        bars[2].style.backgroundColor = "yellow";
        bars[3].style.backgroundColor = "transparent";
    }else if(checked == 4){
        bars[0].style.backgroundColor = "rgb(0, 255, 55)";
        bars[1].style.backgroundColor = "rgb(0, 255, 55)";
        bars[2].style.backgroundColor = "rgb(0, 255, 55)";
        bars[3].style.backgroundColor = "rgb(0, 255, 55)";
    }else{
        bars[0].style.backgroundColor = "transparent";
        bars[1].style.backgroundColor = "transparent";
        bars[2].style.backgroundColor = "transparent";
        bars[3].style.backgroundColor = "transparent";
    }
}

//Arreglos de simbolos

function randomEleccionDeArreglo(max, min){
    let num = Math.floor(Math.random()*(max - min + 1)) + min;
    return num;
}


let upperCase = false;
let lowerCase = false;
let numbers = false;
let symbols = false;

function checarList(){

    if(checkListItems[0].checked) upperCase = true;
    else upperCase = false;
    if(checkListItems[1].checked) lowerCase = true;
    else lowerCase = false;
    if(checkListItems[2].checked) numbers = true;
    else numbers = false;
    if(checkListItems[3].checked) symbols = true;
    else symbols = false;

    //no olvidar hacerlos falsos
}

const generate = document.querySelector(".generate");

const arrayOne = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?" ,"@", "[","^", "_", "|", "~"];

const letrasMayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// 25 26 26

let password = "";


//Obtener tamaño

var slideBar = document.querySelector(".slide-bar");
var lengthDisplay = document.querySelector(".length-display");
var passwordGenerated = document.querySelector(".password_generated");

lengthDisplay.innerHTML = slideBar.value;

slideBar.addEventListener("input", ()=>{
    console.log("hj")
    lengthDisplay.innerHTML =slideBar.value;
});

generate.addEventListener("click", ()=>{

    let pos;
    let op;
    let tamano;

    tamano = slideBar.value;

    let i=0;

    //CORRECION DE QUE FORZOSAMENTE DEBEN DE APARCER CIERTA CANTIDAD DE SIMBOLOS EN LA CONTRASEÑA

    checarList();

    if(!upperCase && !lowerCase && !numbers && !symbols){
        password = "Selecciona una opción"
    }else{
        while(i<tamano){
            op = randomEleccionDeArreglo(4, 1);
            //console.log(op);

            if(op == 1 && symbols){
                pos = randomEleccionDeArreglo(0, 24);
                password += arrayOne[pos];
                i++;
            }else if(op == 2 && upperCase){
                pos = randomEleccionDeArreglo(0, 25);
                password += letrasMayusculas[pos];
                i++;
            }else if(op == 3 && lowerCase){
                pos = randomEleccionDeArreglo(0, 25);
                password += letrasMinusculas[pos];
                i++;
            }else if(op == 4 && numbers){
                pos = randomEleccionDeArreglo(0, 9);
                password += pos;
                i++;
            }

        }
    }

    passwordGenerated.textContent = password;
    password = "";

    
})


const copy = document.querySelector(".material-symbols-outlined");

copy.addEventListener("click", ()=>{
    let text = passwordGenerated.innerHTML;
    navigator.clipboard.writeText(text).then(()=>{
    })
});




//VALIDACION
/*
SELECCIONAR AL MENOS UNA
ESTABLECER UNA LONGITUD MÍNIMA(NO MENOR A 4)
GARANTIZAR QUE SIEMPRE SE CUMPLAN LAS OPCIONES SELECCIONADAS POR EL USUARIO


CAMBIAR EL DISEÑO (SI ES QUE HAY TIEMPO)

HACER LA FUNCION DE COPIADO DE PASSWORD

CAMBIAR EL COLOR DE LAS BARRITAS CON RESPECTO A LA FUERZA DEL PASSWORD
*/

/*
PODRIA SER UNA CADENA CON UNA DISTRIBUCIÓN DE CARACTERES SEGUN EL TAMAÑO
IR CAMBIANDO EL MÁXIMO Y EL MÍNIMO SEGÚN SE VAN AÑADIENDO LOS CARACTERES
AGREGARLAS EN UN VECTOR
IRLAS ACOMDANDO EN UNA NUEVA CADENA Y MODIFICAR LOS MÁXIMOS Y MÍNIMOS SEGÇUN SE VA CAMBIANDO EL TAMAÑO DEL VERCTOR, ASÍ HASTA QUE YA NO EXISTA NINGUN ELEMENTO EN EL ARREGLO :)

*/