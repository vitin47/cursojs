function Carro(velocidadeMaxima = 200, aceleracao = 50){
    let velocidadeatual = 0

    this.acelerar = function(){
        if(aceleracao + velocidadeatual <= velocidadeMaxima){
            aceleracao += velocidadeatual
        }
        else{
           velocidadeatual = velocidadeMaxima
        }
    }
        this.getvelocidadeatual = function(){
        return velocidadeatual
     
    }
    
}

const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidadeatual())

  