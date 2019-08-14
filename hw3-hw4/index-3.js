/* -----------------------HomeWork - 3------------------------------- */

// ДЗ-3 : нужно переписать ДЗ-2 используя функции

// Задание 1. Функция принимает число n(проверить что n является целым числом в противном случае завершить работу функции). Функция возвращает строку чисел от 1 до n через разделитель ','. Если число меньше 1 то выдается строка (например n = -2 строка должна быть '1,0,-1,-2')

console.log("Задание 1. Функция принимает число n(проверить что n является целым числом в противном случае завершить работу функции). Функция возвращает строку чисел от 1 до n через разделитель ','. Если число меньше 1 то выдается строка (например n = -2 строка должна быть '1,0,-1,-2') ");

function myLineFirstString(n) {
    var string = '';
    if (parseInt(n) === +n && typeof(n) === 'number') {  
        if ( n === 0) {
            return (0);
        }         
        else if (n > 0) {
            for (let i = 1; i <= n; i++) {                                              
                var str = i + ',';
                string = string + str;                
            } 
            string = string.slice(0, -1);
            return string;      
        }
        else {
            for (let i = 1; i >= n; i--) {                                              
                var str = i + ',';
                string = string + str;                
            } 
            string = string.slice(0, -1);
            return string;       
        }        
    }
    else {
        return ('введите целое число');
    }
};
var n = (-8);
var res = myLineFirstString(n);
console.log(res);



// Задание 2. Функция принимает параметр min. Параметр должен являться числом. В нем лежит число от 0 до 59. Функция должна возвращать в какую четверть часа попадает это число (в первую, вторую, третью или четвертую)

console.log('Задание 2. Функция принимает параметр min. Параметр должен являться числом. В нем лежит число от 0 до 59. Функция должна возвращать в какую четверть часа попадает это число (в первую, вторую, третью или четвертую)');

function myMinSectorFunction(min) {
    if (0 <= min && min <= 59 && typeof(min) === 'number') {
        if (min >= 0 && min < 15){
            return (1);
        }
        else if (min >= 15 && min < 30) {
            return (2);
        }
        else if (min >= 30 && min < 45) {
            return (3);
        }
        else if (min >= 45 && min <= 59) {
            return (4);
        }
    }
    else {
        return ('введите положительное число  от 0 до 59');
    }    
};
var min = (28);
var result = myMinSectorFunction(min);
console.log(result);



// Задание 3. Функция принимает количество часов (проверить что это число). Функция возвращает количество секунд в переданых часах.

console.log('Задание 3. Функция принимает количество часов (проверить что это число). Функция возвращает количество секунд в переданых часах.');

function convertHoursToSeconds (h) {
    if (typeof(h) === 'number') {
        var sec = h * 60 *60;
        return (sec);
    } else {
        return ('введите целое положительное число');
    }  
};
var h = (2);
var result = convertHoursToSeconds (h);
console.log(result);



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



// Задание 4. Функция принимает число n. Функция возвращает факториал данного числа. Факториал отрицательного числа - возвращает NaN. Факториал дробного числа возвращает NaN. Для 0 = 1. Проверить что аргумент является числом.

console.log('Задание 4. Функция принимает число n. Функция возвращает факториал данного числа. Факториал отрицательного числа - возвращает NaN. Факториал дробного числа возвращает NaN. Для 0 = 1. Проверить что аргумент является числом.');

function myFactorial(n) {
    if ( typeof (n) === 'number') {
        if (n < 0 || parseInt(n) !== +n) {
            return NaN;
        }
        else if (n === 0) {
            return (1);
        }
        else {
            var res = 1;
            while (n) {
                res = res * n;
                n = n - 1;
            }
            return (res);
        }
    }
    else return ('введите число');
}
var n = (12);
var result = myFactorial(n);
console.log(result);



// Задание 4-1. В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.

console.log('Задание 4-1. В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.');

function divisionWithoutRemainder(first, second) {
    if (first % second === 0) {
        return (true);
    }
    else {
        return (false);
    }
};
var first = ('-28'); /*проверка на то, что входные параметры являются числом не задана условием, поэтому такой результат*/
var second = (4);
var result = divisionWithoutRemainder(first, second);
console.log(result);



// Задание 5. Функция принимает число n. Выдать первые n чисел ряда Фибоначчи в строку через запятую.

console.log('Задание 5. Функция принимает число n. Выдать первые n чисел ряда Фибоначчи в строку через запятую.')
function myFibonacci(answer) {    
    if (parseInt(answer) === +answer && +answer > 0 && typeof(answer) === 'number') {
        var first = 0;
        var second = 1;
        var sum = 0; 
        var str = first + ',' + second + ','; 
        var res = '';
        for (var i = 3; i <= answer; i++) {    
            sum = first + second;      
            first = second;
            second = sum;   
            res = res + sum + ',';            
        }
        str = str + res;
        str = str.slice(0, -1);
        return (str);
    } else {
        return ('введите целое положительное число');
    }    
};
var answer = (18);
var result = myFibonacci(answer);
console.log(result);