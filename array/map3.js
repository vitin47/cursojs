Array.prototype.map2 = function(callback){
    const array = []
    for(let i = 0; i< this.length; i++){
        array.push(callback(this[i], i, this))
    }
    return array
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis", "preco": 41.29}',
    '{"nome": "Caneta", "preco": 7.50}'

]


const paraobj = a => JSON.parse(a)
const sopreco = e => e.preco

console.log(carrinho.map2(paraobj).map2(sopreco))