const teste = ['a', 2, 'b', 2, 'c', 3, 'd', 4]
const pesquisa = ['2']
let temp = false

for(i = 0; i <= teste.length; i++){
    for(j = 0; j<pesquisa.length; j++){
        if(teste[i] == pesquisa[j]){
            temp = true
        }
    }
}

if(temp === true){
    console.log('valor encontrado')
}else{
    console.log('valor nao encontrado')
}


