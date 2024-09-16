/*14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.*/

const empresa = {
    departamentos: [
      {
        nome: "TI",
        funcionarios: ["João", "Maria"]
      },
      {
        nome: "RH",
        funcionarios: ["Ana", "Carlos"]
      }
    ]
  };
  
  for (let departamento in empresa.departamentos) {
    const depto = empresa.departamentos[departamento];
    for (let funcionario of depto.funcionarios) {
      console.log(`Funcionário: ${funcionario}, Departamento: ${depto.nome}`);
    }
  }