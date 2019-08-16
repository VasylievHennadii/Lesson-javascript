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