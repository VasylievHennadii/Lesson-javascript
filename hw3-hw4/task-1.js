/* -----------------------HomeWork - 3------------------------------- */

// ДЗ-3 : нужно переписать ДЗ-2 используя функции

// Задание 1. Функция принимает число n(проверить что n является целым числом в противном случае завершить работу функции). Функция возвращает строку чисел от 1 до n через разделитель ','. Если число меньше 1 то выдается строка (например n = -2 строка должна быть '1,0,-1,-2')

function myLineFirstString(n) {
  var string = '';

  if (parseInt(n) === +n && typeof(n) === 'number') {
    if (n === 0) {
      return 0;
    } else if (n > 0) {
      for (let i = 1; i <= n; i++) {
        var str = i + ',';

        string = string + str;
      }

      string = string.slice(0, -1);

      return string;
    } else {
      for (let i = 1; i >= n; i--) {
        var str = i + ',';

        string = string + str;
      }

      string = string.slice(0, -1);

      return string;
    }
  } else {
    return 'Введите целое число';
  }
}

var n = -8;
var res = myLineFirstString(n);

console.log(res);
