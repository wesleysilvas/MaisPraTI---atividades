/*9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

const clientes = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Ana", idade: 40, cidade: "Belo Horizonte" }
  ];
  
  let count = 0;
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      count++;
    }
  });
  console.log(`Clientes com mais de 30 anos: ${count}`);