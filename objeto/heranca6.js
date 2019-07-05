function Aula(nome, video){
    this.nome = nome, this.video = video
}

const aula1 = new Aula('Olá', 1231)
const aula2 = new Aula('flww', 432)

console.log(aula1, aula2)

//simula o new

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'bem vindo', 4324)

console.log(aula3)