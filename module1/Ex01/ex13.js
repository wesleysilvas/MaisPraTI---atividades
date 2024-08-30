/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/
const prompt = require('prompt-sync')()

let num, sum = 0, counter = 0

do {

    num = Number(prompt("Informe um número decimal (ou 0 para fazer a média entre eles): "))
    if (num !== 0) {
        sum += num
        counter++
    }
} while (num !== 0)

if (counter === 0) {
    console.log("")
    console.log("Nenhum número válido foi inserido.")
} else {
    let media = sum / counter;
    console.log("")
    console.log('A média é: ' + media)
}