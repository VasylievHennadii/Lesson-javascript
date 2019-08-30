// -Написать функцию принимающую массив и возвращающую сумму элементов этого массива
function sumArr(a){
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] == 'number') {
            sum = sum + a[i]
        } else {
            return false;
        }       
    }
    return sum    
}
console.log(sumArr([1,0,2,3,4,15,-5,35,0,0,0,5]))