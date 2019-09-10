// Задание 5. Функция принимает число n. Выдать первые n чисел ряда фибоначи.

console.log('Задание 5. Функция принимает число n. Выдать первые n чисел ряда фибоначи');

function myFibonacci(answer) {
  if (parseInt(answer) === +answer && +answer > 0) {
    var first = 0;
    var second = 1;
    var sum = 0;
    // Лучше собрать результат в переменную и потом один раз вывести
    var string = first + ', ' + second;

    for (var i = 3; i <= answer; i++) {
      sum = first + second;
      first = second;
      second = sum;
      string += ', ' + sum;
    }

    alert(string);
  } else {
    alert('введите целое положительное число');
  }
}

var answer = prompt('Введите число');
var result = myFibonacci(answer);
