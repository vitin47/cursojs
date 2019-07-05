const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case  10:
        case 9:
            console.log('ok')
            break

        case 8:
        case 7:
        case 6:
            console.log('raspando')
            break
        case nota < 6:
            console.log('reprovado')
            break
        default:
            console.log('Invalidao')
    }
}

imprimirResultado(10)