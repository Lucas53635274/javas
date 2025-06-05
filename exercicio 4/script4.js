let inscritos = 0;

function inscrever() {
    inscritos++;

    const equipes = Math.floor(inscritos / 3);

    document.getElementById("inscritos").innerText = inscritos;
    document.getElementById("equipes").innerText = equipes;

    if (equipes >= 4 && inscritos % 3 === 0 ) {
        alert("Campeonato poderá ser realizado! Temos pelo meno 4 equipes completas.")
    }
}
// document.getElementById = serve para alterar dados do site do html sem precisar do uso o alert, vc precisa dar o id em algum codigo de texto e logo em seguida colocar aqui
// 
