const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: false},
    {nome: "vitor", nota: 3.3, bolsista: true},
    {nome: "pedro", nota: 7.3, bolsista: false},
    {nome: "moises", nota: 7.3, bolsista: false}
]

const resultado = alunos.map(a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})