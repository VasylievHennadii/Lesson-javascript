// Задание 4. В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.

console.log('Задание 4. В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.');

function divisionWithoutRemainder(first, second) {
  if (first % second === 0) {
    alert(true);
  } else {
    alert(false);
  }
}

var first = prompt('Введите первое число');
var second = prompt('Введите второе число');
var result = divisionWithoutRemainder(first, second);25

// 2 пробела отступ
