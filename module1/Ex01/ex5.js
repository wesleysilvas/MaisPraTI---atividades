/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

const prompt = require('prompt-sync')()

function IMC(a, b) {

    let ratio = a / Math.pow(b, 2)

    if (ratio < 18.5) {
        console.log(`Seu IMC é: ${ratio.toFixed(1)}! Você está abaixo do peso!`)
    } else if (ratio >= 18.5 && ratio <= 24.9) {
        console.log(`Seu IMC é: ${ratio.toFixed(1)}! Você está com o peso normal!`)
    } else if (ratio >= 25 && ratio <= 29.9) {
        console.log(`Seu IMC é: ${ratio.toFixed(1)}! Você está com sobrepeso!`)
    } else if (ratio >= 30 && ratio <= 39.9) {
        console.log(`Seu IMC é: ${ratio.toFixed(1)}! Você está com obesidade!`)
    } else {
        console.log(`Seu IMC é: ${ratio.toFixed(1)}! Você está com obesidade mórbida!`)
    }
}

console.log("Bem-vindo a calculadora de Índice de Massa Corporal (IMC)!")
console.log("")
console.log("Informe os dados solicitados abaixo e descubra sua categoria de peso:")
console.log("(baixo peso, peso normal, sobrepeso, obesidade ou obesidade mórbida)")
console.log("")

let weight
let height
let heightInput

while (true) {
    weight = Number(prompt("Insira o seu peso: "))
    if (!isNaN(weight)) {
        break
    } else {
        console.log("Você precisa inserir um número. Por favor, repita o processo!")
    }
}
while (true) {
    heightInput = prompt("Insira a sua altura: ")

    if (!isNaN(Number(heightInput))) {
        if (!heightInput.includes('.')) {
            heightInput = heightInput.slice(0, 1) + '.' + heightInput.slice(1)
        }
        height = Number(heightInput)
        break
    } else {
        console.log("Você precisa inserir um número. Por favor, repita o processo!")
    }
}

IMC(weight, height)

