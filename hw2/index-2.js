/* -----------------------HomeWork - 2------------------------------- */

// Задание 1. Функция принимает число n(проверить что n является числом в противном случае завершить работу функции). Функция возвращает строку чисел от 1 до n через разделитель ','. Если число меньше 1 то выдается строка (например n = -2 строка должна быть '1,0,-1,-2')

console.log('Задание 1. Функция принимает число n(проверить что n является числом в противном случае завершить работу функции). Функция возвращает строку чисел от 1 до n через разделитель ','. Если число меньше 1 то выдается строка (например n = -2 строка должна быть "1,0,-1,-2")');

function myLineFirstString(n) {
    if (parseInt(n) === +n) {
        var string = '';   
        if (n >= 0) {
            for (let i = 1; i <= n; i++) {                                              
                var str = i + ',';
                string = string + str;                
            } 
            string = string.slice(0, -1);
            console.log(string);      
        }
        else {
            for (let i = 1; i >= n; i--) {                                              
                var str = i + ',';
                string = string + str;                
            } 
            string = string.slice(0, -1);
            console.log(string);       
        }        
    }
    else {
        alert('введите целое число');
    }
};
var n = prompt('enter');
var res = myLineFirstString(n);



// Задание 2. Функция принимает параметр min. Параметр должен являться числом. В нем лежит число от 0 до 59. Функция должна возвращать в какую четверть часа попадает это число (в первую, вторую, третью или четвертую)

console.log('Задание 2. Функция принимает параметр min. Параметр должен являться числом. В нем лежит число от 0 до 59. Функция должна возвращать в какую четверть часа попадает это число (в первую, вторую, третью или четвертую)');

function myMinSectorFunction(min) {
    if (0 <= min && min <= 59 && parseInt(min) === +min) {
        if (min >= 0 && min < 15){
            console.log(1);
        }
        else if (min >= 15 && min < 30) {
            console.log(2);
        }
        else if (min >= 30 && min < 45) {
            console.log(3);
        }
        else if (min >= 45 && min <= 59) {
            console.log(4);
        }
    }
    else {
        alert('введите целое положительное число  от 0 до 59');
    }    
};
var min = prompt('enter');
var result = myMinSectorFunction(min);



// Задание 3. Функция принимает количество часов (проверить что это число). Функция возвращает количество секунд в переданых часах.

console.log('Задание 3. Функция принимает количество часов (проверить что это число). Функция возвращает количество секунд в переданых часах');

function convertHoursToSeconds (h) {
    if (parseInt(h) === +h && +h >= 0) {
        var sec = h * 60 *60;
        console.log(sec);
    } else {
        alert('введите целое положительное число');
    }  
};
var h = prompt ('enter');
var result = convertHoursToSeconds (h);



// Задание 3-1. Функция принимает количество секунд (проверить что это число). Функция возвращает количество дней, часов, минут, секунд в переданых секундах.

console.log('Задание 3-1. Функция принимает количество секунд (проверить что это число). Функция возвращает количество дней, часов, минут, секунд в переданых секундах');

function convSecToMinHourDay (sec) {
    if (+sec % sec === 0 && sec >= 0) {
        var minutes = sec / 60;
        var hours = minutes / 60;
        var day = 'day:' + parseInt(hours / 24) + ' hours:' + parseInt(hours % 24) + ' minutes:' + parseInt(minutes % 60) + ' second:' + parseInt(sec % 60);
        console.log(day);
    } else {
        alert('введите целое положительное число');
    }  
};
var sec = prompt ('enter');
var result = convSecToMinHourDay (sec);



// Задание 4. В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.

console.log('Задание 4. В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.');

function divisionWithoutRemainder(first, second) {
    if (first % second === 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
};
var first = prompt('enter');
var second = prompt('enter');
var result = divisionWithoutRemainder(first, second);



// Задание 5. Функция принимает число n. Выдать первые n чисел ряда фибоначи.

console.log('Задание 5. Функция принимает число n. Выдать первые n чисел ряда фибоначи');
function myFibonacci(answer) {
    if (parseInt(answer) === +answer && +answer > 0) {
        var first = 0;
        var second = 1;
        var sum = 0;
        console.log(first);
        console.log(second);
        for (var i = 3; i <= answer; i++) {    
            sum = first + second;      
            first = second;
            second = sum;   
            console.log(sum);
        }
    } else {
        alert('введите целое положительное число');
    }    
};
var answer = prompt('enter');
var result = myFibonacci(answer);