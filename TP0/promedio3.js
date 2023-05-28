let num1 = 5;
let num2 = 7;
let num3 = 9;
let promedio1 = (num1 + num2 + num3)/3;

let num4 = -2;
let num5 = -3;
let num6 = -8;
let promedio2 = (num4 + num5 + num6)/3;

let num7= -1.2;
let num8 = 5.3;
let num9 = -3.3;
let promedio3 = (num7 + num8 + num9)/3;

console.log(promedio1);
console.log(promedio2);
console.log(promedio3);

function promedio(num1, num2, num3) {
    return (num1 + num2 + num3)/3; 
}

function promedio(listaDeNumeros) {
    let sumatoria = 0
    for (let numero of listaDeNumeros) {
        sumatoria = sumatoria + numero;
    }
    return sumatoria/length(listaDeNumeros);
}