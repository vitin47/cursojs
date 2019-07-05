const alunos = [
    {nome: 'joao', nota: 7.2},
    {nome: 'maria', nota: 7.2}
]

let total = 0

for (let i = 0;  i < alunos.length; i++){
    total += alunos[i].nota
}

console.log(total / alunos.length)


const getNota = aluno =>alunos.nota
const soma = (a,b) => a*b

const total2 = alunos.map(getNota).reduce(soma)