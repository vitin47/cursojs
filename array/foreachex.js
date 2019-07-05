Array.prototype.forEach2 = function(a){
    for(i = 0; i < this.length; i++){
        a(this[i] * 2, i, this)
        
    }
}

const aprovados = [1, 2, 3, 4]

aprovados.forEach2(function(nome){
    console.log(`${nome}`)
})