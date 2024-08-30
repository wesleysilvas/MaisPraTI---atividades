/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

const prompt = require('prompt-sync')()

let counter
do {
    counter = parseInt(prompt("Quantos termos da sequência de Fibonacci você deseja ver em tela? "))
    if (isNaN(counter)) {
        console.log("Informe um número válido, por favor!")
        console.log("")
    }
} while (isNaN(counter))

    let a = 0
    let b = 1

    console.log(`1º termo: ${a}`)

    for(let i = 2; i <= counter; i++) {
        console.log(`${i}º termo: ${b}`)
        c = a + b
        a = b
        b = c
    }