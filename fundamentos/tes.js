const soma = function(x,y){
    return x+y
}

const imprimir = function (a,b, operacao = soma){
    console.log(operacao(2,3))
}

imprimir(2,3, a = (x,y)=> x*y)