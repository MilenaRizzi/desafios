const faturamentos = require("./data.json");
const faturamentosDiarios = faturamentos.faturamentos[0].faturamento_diario

function menorFaturamentoDia() {  
  let menorFaturamento = faturamentosDiarios[0].valor;
  let diaMenorFaturamento;

  faturamentosDiarios.forEach(element => {
    if(element.valor < menorFaturamento && element.valor !== 0) {
      menorFaturamento = element.valor;
      diaMenorFaturamento = element.dia
    }
  });
  return(`o menor faturamento do mês foi: ${menorFaturamento} no dia ${diaMenorFaturamento}`)
}

function maiorFaturamentoDia( ) {
  let maiorFaturamento = 0;
  let diaMaiorFaturamento;
  
  faturamentosDiarios.forEach(element => {
    if(element.valor > maiorFaturamento) {
      maiorFaturamento = element.valor;
      diaMaiorFaturamento = element.dia
    }
  });

  return (`o menor faturamento do mês foi: ${maiorFaturamento} no dia ${diaMaiorFaturamento}`)
}

function mediaMensal() {
  let soma = faturamentosDiarios.reduce((acc, element) => {
    return acc += element.valor;
  }, 0)
  let media = soma / faturamentosDiarios.length;
  return media.toFixed(2);
}

function diasFaturamentoAcimaDaMedia() {
  const mediaMes= mediaMensal();
  console.log(mediaMes)
  let dias = 0;
  faturamentosDiarios.forEach((element) => {
    if(element.valor > mediaMes) {
      dias++;
    }
  })
  return (`A quantidade de dias em que o faturamento diário foi maior que a média mensal foi de: ${dias}`)
}

console.log("Balanço do faturamento do mês de Março: ");
console.log(menorFaturamentoDia())
console.log(maiorFaturamentoDia())
console.log(diasFaturamentoAcimaDaMedia())