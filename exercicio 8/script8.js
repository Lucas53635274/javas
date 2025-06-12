let mostraHTML = document.getElementById("mostraHTML");

let numero = 0;
let chance
let acerto

function aleatorio(){

    numero = parseInt (Math.random() * 101);
    
    mostraHTML.innerHTML += `<p>Pensei em um número acerte-o:</p>`;

    console.log(aleatorio);
}

