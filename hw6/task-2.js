// Написать функцию принимающую массив(числовой) и возвращающую максимальное число в этом массиве
function maxElementArr(a) {
    console.log(a)
    var max = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}
console.log(maxElementArr([-10,0,2,3,4,-15,-5,35,-4,0,0,0,5,6,8,-10]))