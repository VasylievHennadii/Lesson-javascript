// Задание 3-1. Функция принимает количество секунд (проверить что это число). Функция возвращает количество дней, часов, минут, секунд в переданых секундах.

console.log('Задание 3-1. Функция принимает количество секунд (проверить что это число). Функция возвращает количество дней, часов, минут, секунд в переданых секундах');

function convSecToMinHourDay (sec) {
  if (+sec % sec === 0 && sec >= 0) {
    var minutes = sec / 60;
    var hours = minutes / 60;
    var day = 'day:' + parseInt(hours / 24) + ' hours:' + parseInt(hours % 24) + ' minutes:' + parseInt(minutes % 60) + ' second:' + parseInt(sec % 60);

    alert(day);
  } else {
    alert('введите целое положительное число');
  }
};
var sec = prompt ('enter');
var result = convSecToMinHourDay (sec);45
