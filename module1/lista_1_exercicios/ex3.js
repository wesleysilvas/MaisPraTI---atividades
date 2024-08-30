/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

const prompt = require('prompt-sync')()

function scoreClassification(score) {

    if (score < 5) {
        console.log(`Nota informada: ${score.toFixed(2)}. Reprovado!`)
    } else if (score >= 5 && score < 7) {
        console.log(`Nota informada: ${score.toFixed(2)}. Recuperação!`)
    } else {
        console.log(`Nota informada: ${score.toFixed(2)}. Parabéns! Você está aprovado!`)
    }
}

let value
do {
    value = Number(prompt("Informe a sua nota: "))
    if (isNaN(value) || value < 0 || value > 10) {
        console.log("Entrada inválida. Por favor, insira uma nota de 0 a 10.")
    }

} while (isNaN(value) || value < 0 || value > 10)

scoreClassification(value)