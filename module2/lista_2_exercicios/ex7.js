/*Manipulação de Arrays de Objetos com forEach
7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

const produtos = [
    { nome: "Notebook", preco: 2000, desconto: 0 },
    { nome: "Mouse", preco: 100, desconto: 0 },
    { nome: "Teclado", preco: 150, desconto: 0 }
  ];
  
  produtos.forEach(produto => {
    produto.preco -= produto.preco * 0.1;
    console.log(`Produto: ${produto.nome}, Novo Preço: ${produto.preco}`);
  });