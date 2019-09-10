// 2. Сгенерить рандомное число - проверить является ли оно целым

// генератор рандомного числа  с одним знаком после запятой
var a = ( Math.random() * 10 ) + 1;
a = Number(a.toFixed(1));
console.log(a);
// функция проверки на integer number
function randomInteger(a) {
    if (parseInt(a) % a === 0 && Number(a.toFixed()) === a) {
        return true;
    }
    return false;
};
console.log(randomInteger(a));