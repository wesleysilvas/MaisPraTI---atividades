/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

const prompt = require('prompt-sync')()

function ageClassification(age) {

    if (age >= 0 && age <= 12) {
        console.log(`Você tem ${age} ano(s) de idade. Classificação: criança (0-12 anos).`)
    } else if (age >= 13 && age <= 17) {
        console.log(`Você tem ${age} anos de idade. Classificação: adolescente (13-17 anos).`)
    } else if (age >= 18 && age <= 60) {
        console.log(`Você tem ${age} anos de idade. Classificação: adulto (18-60 anos).`)
    } else {
        console.log(`Você tem ${age} anos de idade. Classificação: idoso (60+).`)
    }
}

let value
do {
    value = parseInt(prompt("Informe a sua idade e descubra a que faixa etária você pertence: "))
    if (value < 0 || isNaN(value)) {
        console.log("Idade inválida. (Informe um número maior ou igual a 0)!")
    }
} while (value < 0 || isNaN(value))

ageClassification(value)