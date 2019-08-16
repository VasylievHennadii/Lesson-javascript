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
var result = divisionWithoutRemainder(first, second);25