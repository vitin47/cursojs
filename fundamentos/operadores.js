function compras(t1, t2){
    const comprarSorvete = t1 || t2
    const comprarTv50 = t1 && t2
    const comprarTv32 = t1 != t2
    const saudavel = !comprarSorvete
    return {comprarSorvete, comprarTv50, comprarTv32, saudavel}
}

console.log(compras(false, false))