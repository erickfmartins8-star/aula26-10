// function sayHello() {
//   return "seja bem vindo";
// }
// let message = sayHello();
// console.log(message)
// function somar(a, b) {
//     if(isNaN(a) || isNaN(b))
//   return "erro, digite um valor valido"
// }
// return a + b ;
// let num1= number(prompt("digite um numero"));
// let num2= number(prompt("digite mais outro numero"));

// let produto = multiply(num1,num2)
// console.log(produto)
function calcularMedia(a,b,c){
    return (a +b +c) /3
} 

function verificaAprovacao(media)
if(media >=7){
    return "aprovado;"
}
else if(media >= 5 && media <7){
    return "recuperação";
}
else{
    return "aprovado";
}

let nota1 = number(prompt("digite sua nota"));
let nota2 = number(prompt("digite sua nota"));
let nota3 = number(prompt("digite sua nota"));