// Задание 3. Функция принимает количество часов (проверить что это число). Функция возвращает количество секунд в переданых часах.

console.log('Задание 3. Функция принимает количество часов (проверить что это число). Функция возвращает количество секунд в переданых часах.');

function convertHoursToSeconds (h) {
  if (typeof(h) === 'number') {
    var sec = h * 60 * 60;

    return (sec);
  } else {
    return 'введите целое положительное число';
  }
}

var h = 2;
var result = convertHoursToSeconds(h);
console.log(result);
