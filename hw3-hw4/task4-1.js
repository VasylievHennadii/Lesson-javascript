// Задание 4-1. В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.

console.log('Задание 4-1. В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.');

function divisionWithoutRemainder(first, second) {
  // Проще сразу вернуть условие, тоже самое выйдет
  return first % second === 0;
}

var first = '-28'; /*проверка на то, что входные параметры являются числом не задана условием, поэтому такой результат*/
var second = (4);
var result = divisionWithoutRemainder(first, second);
console.log(result);
