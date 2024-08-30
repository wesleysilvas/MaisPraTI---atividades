/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

const prompt = require('prompt-sync')()

function getValidNumber(promptText) {
    let num
    do {
        num = Number(prompt(promptText))
        if (isNaN(num)) {
            console.log("Valor inválido! Insira um número, por favor!")
        }
    } while (isNaN(num))

    return (num)
}

let a = getValidNumber("Informe o 1º número: ")
let b = getValidNumber("Informe o 2º número: ")
let c = getValidNumber("Informe o 3º número: ")

if (!(a < b + c && b < a + c && c < a + b)) {
    console.log("")
    console.log("Não é um triângulo!")
}
if (a < b + c && b < a + c && c < a + b) {
    if (a === b || a === c || b === c) {
        console.log("")
        console.log("Triângulo isósceles.")
    } else if (a !== b && b !== c) {
        console.log("")
        console.log("Triângulo escaleno.")
    } else if (a === b && b === c) {
        console.log("")
        console.log("Triângulo Equilátero.")
    }
}
console.log("")
console.log("Programa finalizado.")