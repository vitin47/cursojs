function aleatorio(min, max){
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

aux = 0
let cont = 0

while(aux != 10){
    aux = aleatorio(0,11)
    console.log(`A opção encontrada foi ${aux}`)
    cont++
}
console.log(`Depois de passar ${cont} veses ele encontrou o valor`)