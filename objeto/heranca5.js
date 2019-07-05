String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('teste reverse.'.reverse())

Array.prototype.first = function(){
    return this[1]
}

const carros = ['amarok', 'barnes']

console.log(carros.first())