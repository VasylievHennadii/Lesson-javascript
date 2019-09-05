// Написать функцию принимающую массив(числовой) и возвращающую его без нулевых элементов
function arrWithoutNull(a) {
    console.log(a)
    var c = [];    
    var k = 0;    
    for (var i = 0; i < a.length; i++) {        
        if (a[i] !== 0 ) {
            c[k] = a[i];
            k += 1;
        } 
    }    return c;       
}
console.log(arrWithoutNull([1,0,2,3,4,15,-5,35,-4,0,0,0,5,6,8,10]))