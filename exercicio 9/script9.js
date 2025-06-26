let mostraHTML = document.getElementById("mostraHTML");
function estacao(){
    let mes = prompt("Digite um mes").toUpperCase()

    console.log(mes);
    if(mes == "JANEIRO" , "DEZEMBRO" , "FEVEREIRO"){
    mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é verão! <p/>`

    }
    if(mes == "MARÇO" || mes == "ABRIL" || mes == "MAIO"){
        mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é outono! <p/>`
    
    }
    if(mes == "JUNHO" || mes == "JULHO" || mes == "AGOSTO"){
        mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é inverno! <p/>`
    
    }
    if(mes == "SETEMBRO" || mes == "OUTUBRO" || mes == "NOVEMBRO"){
        mostraHTML.innerHTML = `<p>Você falou o ${mes}. A estação do ano é primavera! <p/>`
    
    }
}
