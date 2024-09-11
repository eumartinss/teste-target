/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
 (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
 ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/


function fibonacci(x) {


let a = 0 
let b = 1
let proximo = a + b;
    
    if (x === a || x === b) {        /*caso o numero escolhido seja igual a 0 ou 1 o código se encerra aqui */
        return 'O número ' + x + ' pertence à sequência de Fibonacci.';
    }

    while (proximo <= x) {      /* enquanto o resultado das somas for menor que o "x", o codigo continuará. caso o resultado passe de "x" e ainda nao tenha se encaixado nos requisitos, ele nao pertence a sequencia.   */
        if (proximo === x) {    /* se o numero escolhido "x" for igual ao resultado de uma das somas, o código encerra aqui */
            return 'O número '+ x +' pertence à sequência de Fibonacci.';
        }
        a = b; /* da linha 21 a 23 cosiste na lógica da sequência de Fibonacci, onde o resultado da soma anterior se torna o novo "b" e é somado com o novo "a", que passa a ser o antigo "b", gerando um novo valor.   */
        b = proximo;
        proximo = a + b;
    }
           /* caso o numero escolhido nao se encaixe nas condições anteriores, ele nao pertence a sequência de Fibonacci */
    return 'O número '+ x +' não pertence à sequência de Fibonacci.';
}

console.log(fibonacci(27))
