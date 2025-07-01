function contador() {

    let mostraHTML = document.getElementById("mostraHTML")
    
    let parOuImpar = document.getElementById("mostraHTML")

     
    let contador = 1;

    while (contador <= 10){
        mostraHTML.innerHTML += `<mark> ${contador} &#128521 </mark>`;
        contador++;
    }

}


