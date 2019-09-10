// Принимается число -> посчитать факториал числа, для отрицательных не определен, для дробных не определен. Для 0 = 1. Для всех остальных перемножение всех чисел, включая его самого. Факториал считается для чисел до 12. Если число больше, выводится "Число слишком велико".

var answer = +prompt('Enter the number');

if (answer > 12) {
    alert('very big number');

// Если результат один, можно писать оператор ||
} else if (Number(answer.toFixed()) !== answer || answer < 0) {
    alert('undefined');
} else if (answer == 0) {
    alert('= 1');
} else {
    var result = 1;

    while (answer) {
        result = result * answer;
        answer = answer - 1;
    }

    alert(result);
}
