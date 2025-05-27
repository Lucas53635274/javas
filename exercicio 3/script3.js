function somar(){
let nota1;
let nota2;
let nota3;
let resultado;

nota1 = Number(window.prompt("Digite aqui o primeiro nota"));
nota2 = Number(window.prompt("Digite o segundo nota"));
nota3 = Number(window.prompt("Digite a terceira nota"));

resultado = nota1 + nota2 + nota3 / 6;

}

if (resultado => 180) {
    alert("Você passou!" + resultado + ".");
} else {
    if (resultado < 180)
        alert ("Você não passou!" + resultado + ".")
}