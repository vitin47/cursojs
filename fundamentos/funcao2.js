//armazenar funct em var


const imprimirSoma =  function(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)


//Função arrow

const soma = (a,b) =>{
    return a+b
}

console.log(soma(1,9))

//retorno implícito
const subtracao = (a,b) => a-b

console.log(subtracao(2,1))