// Написать функцию принимающую массив(числовой) и возвращающую минимальное число в этом массиве
function minElementArr(a) {
  var min = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
  }

  return min;
}

console.log(minElementArr([10,0,2,3,4,15,-5,35,-4,0,0,0,5,6,8,10]));

// Отступы
