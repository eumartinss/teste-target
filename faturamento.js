const faturamento = [
    { dia: 1, valor: 22174.1664 },
    { dia: 2, valor: 24537.6698 },
    { dia: 3, valor: 26139.6134 },
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 26742.6612 },
    { dia: 7, valor: 0.0 },
    { dia: 8, valor: 42889.2258 },
    { dia: 9, valor: 46251.174 },
    { dia: 10, valor: 11191.4722 },
    { dia: 11, valor: 0.0 },
    { dia: 12, valor: 0.0 },
    { dia: 13, valor: 3847.4823 },
    { dia: 14, valor: 373.7838 },
    { dia: 15, valor: 2659.7563 },
    { dia: 16, valor: 48924.2448 },
    { dia: 17, valor: 18419.2614 },
    { dia: 18, valor: 0.0 },
    { dia: 19, valor: 0.0 },
    { dia: 20, valor: 35240.1826 },
    { dia: 21, valor: 43829.1667 },
    { dia: 22, valor: 18235.6852 },
    { dia: 23, valor: 4355.0662 },
    { dia: 24, valor: 13327.1025 },
    { dia: 25, valor: 0.0 },
    { dia: 26, valor: 0.0 },
    { dia: 27, valor: 25681.8318 },
    { dia: 28, valor: 1718.1221 },
    { dia: 29, valor: 13220.495 },
    { dia: 30, valor: 8414.61 }
  ];

const faturamentoOk = faturamento.filter(dia => dia.valor > 0) // Dias do mês em que houve faturamento
const valores = faturamentoOk.map(dia => dia.valor) // Somente os valores da lista
const menorFaturamento = Math.min(...valores) // Valor do menor faturamento do mês
const maiorFaturamento = Math.max(...valores) // Valor do maior faturamento do mês
const somaFaturamento = faturamento.reduce((acumulador, item) => acumulador + item.valor, 0) // Soma total de faturamento
const mediaMensal = somaFaturamento / faturamentoOk.length // Soma dos valores totais divido pelos dias que houve faturamento
const diarioSuperior = faturamentoOk.filter(dia => dia.valor > mediaMensal).length // Quantidade de dias em que o faturamento foi maior que a média mensal

console.log('O menor valor de faturamento ocorrido em um dia do mês foi de '+ menorFaturamento + ', e o maior valorm foi de ' + maiorFaturamento +'. O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de ' + diarioSuperior + ' dias.')