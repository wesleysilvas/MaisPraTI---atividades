/*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.*/

function countdown(a, b) {
    for (let i = a; i >= b; i--) {
        console.log(i)
    }
}

let initialValue = 10
let finalValue = 1

countdown(initialValue, finalValue)