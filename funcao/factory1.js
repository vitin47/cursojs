function criarPessoa(nome, sobrenome){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: 20
    }
}

console.log(criarPessoa('vitor', 'pires'))
console.log(criarPessoa('vitor', 'reis'))