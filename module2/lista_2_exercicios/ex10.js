/*Combinação de Estruturas

10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.*/

const vendas = [
    { produto: "Celular", quantidade: 2, valor: 1200 },
    { produto: "Notebook", quantidade: 1, valor: 2500 },
    { produto: "Fone", quantidade: 5, valor: 100 }
  ];
  
  let valorTotal = 0;
  vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
  });
  console.log(`Valor total das vendas: ${valorTotal}`);