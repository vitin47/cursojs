// const pessoa = {
//     saudacao: 'Bom dia',
//     falar() {
//         console.log(this.saudacao)
//     }
// }

// pessoa.falar()

// const falar = pessoa.falar.bind(pessoa)
// falar()

function pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa()