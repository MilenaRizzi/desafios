function percenturalDeRepresentacao(faturamentoDistribuidora) {
  let totalFaturamento = faturamentoDistribuidora.reduce((acc, element) => {
    return acc += element.faturamento;
  }, 0)

  faturamentoDistribuidora.map((element) => {
    element.percentual = Number(((element.faturamento / totalFaturamento)* 100).toFixed(2));
  })  

  faturamentoDistribuidora.forEach((element) =>  {
    console.log(`${element.estado}: ${element.percentual}%`)
  })
}

const faturamentoDistribuidora = [
  {
    estado: "SP",
    faturamento: 67836.43 
  },
  {
    estado: "RJ",
    faturamento: 36678.66 
  },
  {
    estado: "MG",
    faturamento: 29229.88 
  },
  {
    estado: "ES",
    faturamento: 27165.48 
  },
  {
    estado: "Outros",
    faturamento: 19849.53 
  } 
];

console.log("O percentual de faturamento de cada estado foi: ")
percenturalDeRepresentacao(faturamentoDistribuidora);