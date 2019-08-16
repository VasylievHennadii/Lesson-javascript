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