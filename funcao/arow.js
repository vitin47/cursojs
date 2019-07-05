// let dobro = function(a){
//     return 2* a
// }

// dobro = a => 2* a

// console.log(dobro(3))

// ola 

// function pessoa(){
//     this.idade = 0

//     setInterval(function(){
//         this.idade++
//         console.log(this.idade)
//     }.bind(this), 500)

// }

// new pessoa()

function pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade ++
        console.log(this.idade)
    }, 500)
}

new pessoa()