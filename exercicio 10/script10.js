function contador() {

    let mostraHTML = document.getElementById("mostraHTML")
     
    let contador = 1;

    while (contador <= 10){
        mostraHTML.innerHTML += `${contador} &#128521`;
        contador++;
    }
    
}