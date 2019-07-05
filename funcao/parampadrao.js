function soma1(a, b, c){
    if(a == null || a == undefined || b == null || b == undefinedc == null || c == undefined){
        a = 0
        b = 0
        c= 0
    }
    else{
    a = a || 1
    b = b || 1
    c = c || 1
    }
    return a+b+c


}
 function soma(a,b,c){
     a = isNaN(a)?1:a
     b = isNaN(b)?1:a
     c = isNaN(c)?1:a
        return a+b+c
    }

    console.log(soma(0,0,0))