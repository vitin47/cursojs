// criar função de maneira literal

function fun1(){}

//armazenar função em variavel

const fun2 = function(){}

const array = [function(a,b){
    return a+b
}]

console.log(array[0](2,3))

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Passa funçao como parametro
function fun(){
    console.log( 'ok')
}

console.log(fun)

function run(fun){
    console.log('oi')
    fun()
}

console.log(run(fun()))