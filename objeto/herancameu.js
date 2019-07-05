const carro = {
    modelo: 'uno',
    tipo: 'manual',
    velMax: 200,
    velAtual: 0,
    marca: 'Fiat',
    status(){
        return `${this.velAtual} É a velocidade atual`
    }
}

const uno = {
    tipo: 'automatico',
    velMax: 180, 
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(uno, carro)
uno.acelerar(20)
console.log(uno.velMax)
console.log(uno.status())