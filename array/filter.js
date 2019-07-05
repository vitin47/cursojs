const produtos = [
    '{"nome": "Notebook", "fragil": true}',
    '{"nome": "Ipad", "fragil": true}',
    '{"nome": "copo", "fragil": false}'
]

const toObj = e => JSON.parse(e)

/*
console.log(produtos.map(toObj).filter(function(p){

        return p.fragil === false
}))
*/

const fragil = function(e){
    return e.fragil 
}


console.log(produtos.map(toObj).filter(fragil))


