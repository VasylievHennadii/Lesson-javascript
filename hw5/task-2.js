// - Написать функцию принимающую массив и возвращающую отсортированный массив(метод сортировки писать вручную)
function sortArr(a){
    var n = a.length;     
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-1-i; j++) {
            if (typeof a[i] !== 'number') {
                return false;
            }
            if (a[j+1] < a[j]) {
                var tmp = a[j+1];
                a[j+1] = a[j];
                a[j] = tmp;
            }
        }        
    }
    return a    
}
console.log(sortArr([1,0,2,3,4,15,-5,35,-256,0,0,0,5]))