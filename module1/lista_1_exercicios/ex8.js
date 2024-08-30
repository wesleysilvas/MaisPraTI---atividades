/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const prompt = require('prompt-sync')()

function orderAscending(a, b) {
    if (a < b) {
        console.log("")
        console.log("Organizando em ordem crescente: " + a + ", " + b)
    } else {
        console.log("")
        console.log("Organizando em ordem crescente: " + b + ", " + a)
    }
}

let n1, n2
do {
    n1 = Number(prompt("Digite o 1º número: "))
    n2 = Number(prompt("Digite o 2º número: "))
    if (n1 === n2) {
        console.log("O primeiro valor não pode ser igual ao segundo. Por favor, repita o processo!")
        console.log("")
    } else if ((isNaN(n1)) || (isNaN(n2))) {
        console.log("Insira um número válido.")
        console.log("")
    }
} while (n1 === n2 || isNaN(n1) || isNaN(n2))

orderAscending(n1, n2)