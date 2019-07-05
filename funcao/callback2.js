const notas = [1.1, 3.5, 9.3, 5.7, 9.2]

let notasBaixas = []


notasBaixas = notas.filter(function(i){
    return i < 7
})

console.log(notasBaixas)