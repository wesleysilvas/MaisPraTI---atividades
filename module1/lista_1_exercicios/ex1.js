/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

const prompt = require('prompt-sync')()

function evenOrOdd(number) {

    if (number % 2 === 0) {
        console.log("O número é par")
    } else {
        console.log("O número é ímpar")
    }
}

let num
do {
    num = parseInt(prompt("Informe um número e descubra se ele é par ou ímpar: "))
    if (isNaN(num)) {
        console.log("É necessário que você informe um número.")
    }
} while (isNaN(num))

evenOrOdd(num)