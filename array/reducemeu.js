const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: false},
    {nome: "vitor", nota: 3.3, bolsista: false},
    {nome: "pedro", nota: 7.3, bolsista: false},
    {nome: "moises", nota: 7.3, bolsista: false}
]

const bolsistas = alunos.map(a=>a.bolsista).reduce(function(a,n){
    return a && n
})
console.log(bolsistas)

const algume = (a,b) => a || b

console.log(algume())

console.log(alunos.map(a=>a.bolsista).reduce(algume))