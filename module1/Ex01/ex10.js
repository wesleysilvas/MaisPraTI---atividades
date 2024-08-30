/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

const prompt = require('prompt-sync')()

function iteration(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}ª vez = ${a}`)
    }
}

let number
do {
    number = parseInt(prompt("Insira o número que deseja para que seja repetido 10x: "))
    if (isNaN(number))
        console.log("Escreva um número!")
    console.log("")
} while (isNaN(number))

iteration(number)