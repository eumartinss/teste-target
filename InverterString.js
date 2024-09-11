function inverterCaractere(string) {  
    let stringInvertida = ''

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i]
    } 
    return stringInvertida   
    
}

let palavra = 'estagio'
const resultado = inverterCaractere(palavra)

console.log(resultado)