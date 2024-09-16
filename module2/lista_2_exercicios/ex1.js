/*Manipulação de Objetos

1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.*/

const carro = {
    marca: "Celta",
    modelo: "Chevrolet",
    ano: 2012,
    cor: "prata"
}

for (let key in carro) {
    console.log(`${key}: ${carro[key]}`)
}
