//notação literal
const bola ={
    nome: 'Nike air',
    marca: 'nike',
    valor: 32
}

//object

const carro = new Object

carro.nome = 'celta'

console.log(bola, carro)

// funcao construtora

function produto(nome, preco, desc){
    this.nome = nome
    this.getPreco = () => {
        return preco * (1-desc)
    }
    
}

const p1 = new produto('caneta', 2, 0.1)

console.log(p1.getPreco())

function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = new criarFuncionario('maria', 3213, 0)

console.log(f1.getSalario())