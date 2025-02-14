
let frutas = ["mango", "papaya", "plátano", "durazno", "aguacate"];

let frutasCant = [
    {
        tipo: frutas[0],
        cantidad: 5
    },{
        tipo: frutas[1],
        cantidad: 7
    },{
        tipo: frutas[2],
        cantidad: 2
    },{
        tipo: frutas[3],
        cantidad: 6
    },{
        tipo: frutas[4],
        cantidad: 4
    }
]

let i=0;

//IMPRESIÓN CON BUCLE WHILE

console.log("\nRECORRIDO DE FRUTAS CON CICLO WHILE\n");

while(i<frutas.length){
    console.log("TIPO: " + frutasCant[i].tipo + "\n" + "CANTIDAD: " + frutasCant[i].cantidad + "\n")

    i++;
}

//IMPRESIÓN CON BLUCLE FOR

console.log("\nRECORRIDO DE FRUTAS CON CICLO FOR\n");

for(i=0 ; i<frutas.length ; i++){
    console.log("TIPO: " + frutasCant[i].tipo + "\n" + "CANTIDAD: " + frutasCant[i].cantidad + "\n");
}
