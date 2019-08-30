// -Написать функцию принимающую массив и возвращающую массив с только четными элементами
function evenNumArr(a){    
    var c = [];
    var n = a.length;
    var k = 0;    
    for (var i = 0; i < n; i++) {
        if (typeof a[i] !== 'number') {
            return false;
        }
        if (a[i] % 2 === 0 ) {
            c[k] = a[i];
            k += 1;
        } 
    }    
    return c    
}
console.log(evenNumArr([1,0,2,3,4,15,-5,35,-4,0,0,0,5,6,8,10]))