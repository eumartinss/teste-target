/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

let SP = 67836.43
let RJ = 36678.66
let MG = 29229.88
let ES = 27165.48
let OUTROS = 19849.53
let total = SP + RJ + MG + ES + OUTROS

/* foi utilizado uma conta básica para gerar a porcentagem e o toFixed(2) para utilizar somente duas casas após a virgula */

const porcentagemSP = (100*SP/total).toFixed(2)
const porcentagemRJ = (100*RJ/total).toFixed(2)
const porcentagemMG = (100*MG/total).toFixed(2)
const porcentagemES = (100*ES/total).toFixed(2)
const porcentagemOUTROS = (100*OUTROS/total).toFixed(2)

console.log(`O percentual de faturamento dos estados são: SP = ${porcentagemSP}%, RJ ${porcentagemRJ}%, MG ${porcentagemMG}%, ES ${porcentagemES}%, e ${porcentagemOUTROS}% dos demais estados.`)