let mostraHTML = document.getElementById("mostraHTML");
let numero = 0;
let num_adiv = 0;

numero = parseInt(Math.random() * 101)

function adiv(){
    num_adiv = Number(window.prompt("Digite um número de 1 a 100"));

    frase = mostraHTML.innerHTML += `<p>Você escolheu ${num_adiv}.</p>`;

    if(num_adiv > numero) {
        mostraHTML.innerHTML = `Você escolheu ${num_adiv}. Meu número é MENOR.</p>`;

    } else {
        mostraHTML.innerHTML = `Você escolheu ${num_adiv}. Meu número é MAIOR.</p>`;
    }

    if(numero == num_adiv) {
        mostraHTML.innerHTML = `<p>Parabéns você acertou!`
    }
}
