// - Написать функцию принимающую массив и двигающую в конец все нули, функция должна сохранять порядок оставшихся элементов. [1,0,2,3,4,0,0,0,5] -> [1,2,3,4,5,0,0,0,0]
function sortZeroEndArr(a){    
    var n = a.length;     
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-1-i; j++) {
            if (typeof a[i] !== 'number') {
                return false;
            }
            if (a[j] == 0 && a[j+1] !==0) {
                var tmp = a[j+1];
                a[j+1] = a[j];
                a[j] = tmp;
            } 
        }        
    }
    return a    
}
console.log(sortZeroEndArr([1,0,2,3,6,0,0,0,5]))