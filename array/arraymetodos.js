const pilotos = ['vitor', 'ey', 'joao']
pilotos.pop() // remove o ultimo elemento do array
pilotos.push('Felipe', 'massa') //adiciona itnes
pilotos.shift()//remove o primeiro elemento
pilotos.unshift()//adiciona itens, porem no inicio do array
pilotos.splice(2,0, 'bottas')// adiciona na posição 2, não remove ninguem
pilotos.splice(3, 1, 'barney')
const outro = pilotos.slice(2)// Vai copiar o array, apartir do indice indicado