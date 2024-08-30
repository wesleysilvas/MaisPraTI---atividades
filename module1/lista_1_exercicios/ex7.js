/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt = require('prompt-sync')()

let applePrice
let total
let amount
do {
    amount = parseInt(prompt("Insira a quantidade de maçã que desejas comprar: "))

    if (isNaN(amount) || amount <= 0) {
        console.log("Digite uma quantidade acima de '0'.")
        console.log("")
    }
} while (isNaN(amount) || amount <= 0)

if (amount < 12) {
    applePrice = 0.3
} else {
    applePrice = 0.25
}
total = applePrice * amount

console.log("")
console.log(`Você comprou ${amount} maçã(s)!`)
console.log(`Valor da unidade: R$${applePrice.toFixed(2)}`)

if (total < 1) {
    let centavos = (total * 100);
    console.log(`Total a ser pago = ${centavos} centavos`)
} else {
    console.log(`Total a ser pago = R$${total.toFixed(2)} reais`)
}