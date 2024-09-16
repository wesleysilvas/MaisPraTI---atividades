/*11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

const pedidos = [
    { cliente: "João", produto: "Celular", quantidade: 2 },
    { cliente: "Maria", produto: "Notebook", quantidade: 1 },
    { cliente: "João", produto: "Fone", quantidade: 3 }
  ];
  
  const totalProdutosPorCliente = {};
  
  pedidos.forEach(pedido => {
    if (totalProdutosPorCliente[pedido.cliente]) {
      totalProdutosPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
      totalProdutosPorCliente[pedido.cliente] = pedido.quantidade;
    }
  });
  
  console.log(totalProdutosPorCliente);