let num1
let num2
let resultado

function somar(){
    let num1 = Number(window.prompt("Digite aqui o primeiro número"));
    let num2 = Number(window.prompt("Digite o segundo número"));

    resultado = num1 + num2;     

    parOuImpar = resultado % 2;

    if(parOuImpar == 0) {
        alert("O número " + resultado + " é par");
    } else {
        alert("O número " + resultado + " é impar")
    }

}
