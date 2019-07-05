const vitor = {
    nome: 'vitor',
    idade: 18
}

console.log(Object.keys(vitor))
console.log(Object.values(vitor))

Object.entries(vitor).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

const destino = {a: 1}
const o1 = {a: 2}
const o2 = {c: 3}

Object.assign(destino, o1, o2)

console.log(destino)