

const produtos = [
    '{"nome": "Notebook", "fragil": true}',
    '{"nome": "Ipad", "fragil": true}',
    '{"nome": "copo", "fragil": false}'
]

const toObj = e => JSON.parse(e)

const sofragil = function(e){
    return e.fragil
}

console.log(produtos.map(toObj).filter(sofragil))


