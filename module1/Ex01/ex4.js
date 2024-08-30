/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const prompt = require('prompt-sync')()

function options(number) {

    switch (number) {
        case 1:
            console.log("Aqui está seu sorvete de Umbú. Obrigado por escolher a Sorveteria do baiano!")
            break
        case 2:
            console.log("Aqui está seu sorvete de Pitanga. Obrigado por escolher a Sorveteria do baiano!")
            break
        case 3:
            console.log("Aqui está seu sorvete de Siriguela. Obrigado por escolher a Sorveteria do baiano!")
            break
    }
}

console.log("Olá, Cliente! Seja muito bem-vindo(a) ao Menu da Sorveteria do baiano!")
console.log("Contamos com os melhores sabores cítricos da região para você poder se refrescar nesse calorzão!")
console.log("")
console.log("Escolha já o seu:")
console.log("")
console.log("(Digite 1 - Sabor Umbú)")
console.log("(Digite 2 - Sabor Pitanga)")
console.log("(Digite 3 - Sabor Siriguela)")
console.log("(Digite 0 caso deseje sair do Menu)")
console.log("")

let value

do {
    value = parseInt(prompt("Qual a opção desejada [1,2,3 ou 0 para sair]? "))

    if (value === 0) {
        console.log("")
        console.log("Obrigado pela sua visita! Esperamos que volte logo! :)")
        process.exit(0)
    } else if (value < 1 || value > 3 || isNaN(value)) {
        console.log("Não entendi a opção desejada.")
    }
} while (value < 1 || value > 3 || isNaN(value))


options(value)