/*6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

const funcionarios = [
    { nome: "Carlos", cargo: "Desenvolvedor", salario: 3000 },
    { nome: "Ana", cargo: "Designer", salario: 4000 },
    { nome: "Paulo", cargo: "Gerente", salario: 6000 }
  ];
  
  const salarioMinimo = 3500;
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.salario}`);
    }
  }