const produto = new Object()
produto.nome  = 'Lápis'
produto['Marca'] = 'bic'


const carro = {
    modelo: 'a4',
    valor: 890000,
    proprietario:{
        nome: 'Vitor',
        idade: 20,
        endereco:{
            rua: 'Thalassa',
            num: 172
        }
    },
    condutores:[{
        nome:'jun',
        idade: 38
    },{
        nome: 'Ana',
        idade: 31
    }],
    calculaseguro: function(){
        
    }
}
console.log(carro.condutores[0].nome)