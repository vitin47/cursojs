const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a+b+c
    }
}

a = JSON.stringify(obj)

console.log(JSON.parse(a))