// Задание 3-1. Функция принимает количество секунд (проверить что это число). Функция возвращает количество дней, часов, минут, секунд в переданных секундах.

console.log('Задание 3-1. Функция принимает количество секунд (проверить что это число). Функция возвращает количество дней, часов, минут, секунд в переданных секундах.');

function convSecToMinHourDay (sec) {
    if (typeof(sec) === 'number') {
        var minutes = sec / 60;
        var hours = minutes / 60;
        var day = 'day:' + parseInt(hours / 24) + ' hours:' + parseInt(hours % 24) + ' minutes:' + parseInt(minutes % 60) + ' second:' + parseInt(sec % 60);
        return (day);
    } else {
        return ('введите число');
    }  
};
var sec = (456456);
var result = convSecToMinHourDay (sec);
console.log(result);