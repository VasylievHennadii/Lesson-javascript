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