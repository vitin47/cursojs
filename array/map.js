const nums = [1,2,3,5,6]



const triplo = e => e*3
const paradinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(triplo).map(paradinheiro)

console.log(resultado)