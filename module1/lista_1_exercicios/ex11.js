/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/

const prompt = require('prompt-sync')()

function sum() {
    let total = 0
    let number

    for (let i = 1; i <= 5; i++) {
        number = parseInt(prompt(`Insira o ${i}º valor: `))
        while (isNaN(number)) {
            console.log("É necessário que você digite um número!")
            number = parseInt(prompt(`Insira o ${i}º valor novamente: `))

        }
        total += number
    }
    console.log(`A soma dos números informados é: ${total}`)
}
sum()

