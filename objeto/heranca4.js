function Meuobjeto(){

}

console.log(Meuobjeto.prototype)

const obj1 = new  Meuobjeto
const obj2 = new  Meuobjeto

console.log(obj1 .__proto__ === obj2.__proto__)

