/*2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
ano, publicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.*/

const livro = {
    titulo: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    ano: 1847,
    publicacao: "Thomas Cautley Newby",
    genero: "Romance Gótico",
    editora: "oi"
}

let haseditora = false

for (let key in livro) {
    if (key === "editora") {
        haseditora = true
        console.log(`A chave ${key} existe.`)
    }
}
if (!haseditora) {
    livro.editora = "Thomas Cautley Newby"
    console.log(`Propriedade "editora" foi adicionada.`)
}

console.log(livro)