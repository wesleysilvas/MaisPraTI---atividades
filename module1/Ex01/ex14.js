/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const prompt = require('prompt-sync')()
let fatorial

do {
    fatorial = parseInt(prompt("Informe um número para saber o seu fatorial: "))
    if (isNaN(fatorial)) {
        console.log("")
        console.log("Escreva um número válido, por favor!")
        console.log("")
    }
} while (isNaN(fatorial))

let result = 1
let expression = ""

for (i = fatorial; i >= 1; i--) {
    result *= i
    expression += i + "*"
}

console.log(`${fatorial}! = ${expression} = ${result}`)