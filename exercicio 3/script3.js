var nota1 = Number(window.prompt("Digite a primeira nota: "));
var nota2 = Number(window.prompt("Digite a segunda nota: "));
var nota3 = Number(window.prompt("Digite a terceira nota: "));

let total = (nota1 + nota2 +nota3) / 3;


alert ("media final: " + total.toFixed(1) + ".")

if(total >= 60){ 
    alert("Você atingiu a media!! " + total.toFixed(1))
    alert (" Aprovado")
} else { 
    let pontosFaltando = 60 - total
    alert("Você foi reprovado, faltaram" + pontosFaltando.toFixed(1) + " pontos")
}   
