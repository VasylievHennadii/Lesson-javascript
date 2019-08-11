/* -----------------------HomeWork - 1------------------------------- */

// через prompt принимается число -> проверить простое ли оно (оба примера рабочие)

// используем цикл while
var answer = prompt('Проверка простого числа. Enter number');
if (answer == 1) {
    alert('false');
}
else if (answer > 1 && answer < 4) {
    alert('простое');
}
else {
    var d = 2;
    while(d <= answer/2) {
        if (answer % d === 0 && answer != d) {
            str = 'false';
            break;
        } else {
            str = 'простое';
        }  
        d = d + 1;              
    }
    alert(str);
};

// используем цикл for
var answer = prompt('Проверка простого числа. Enter number');
if (answer == 1) {
    alert('false');
}
else if (answer > 1 && answer < 4) {
    alert('простое');
}
else {    
    for (d = 2; d <= (answer/2); d++) {    
        if (answer % d === 0 && answer != d) {
            str = 'false';
            break;
        } else {
            str = 'простое';
        }                
    }   
    alert(str);
};



// Принимается число -> вернуть целое ли оно или дробное (оба примера рабочие)

var integerNumber = prompt('Проверка дробного числа. Enter number');
if ( parseInt(integerNumber) != integerNumber ) {
    alert("integerNumber дробное число");
} else {
    alert("integerNumber целое число");
};

var integerNumber = prompt('Проверка дробного числа. Enter number');
var result = parseInt(integerNumber) != integerNumber ? 'integerNumber дробное число' : 'integerNumber целое число';
alert(result);



// Принимается число -> вернуть положительное оно или отрицательное (оба примера рабочие)

var signNumber = prompt('Проверка знака числа. Enter number');
if (signNumber >= 0) {
    alert('positive numbers: "+"')
} else {
    alert('negative numbers: "-"')
};

var signNumber = prompt('Проверка знака числа. Enter number');
var result = signNumber >= 0 ? 'positive numbers: "+"' : 'negative numbers: "-"';
alert(result);



// Принимается число -> посчитать факториал числа, для отрицательных не определен, для дробных не определен. Для 0 = 1. Для всех остальных перемножение всех чисел, включая его самого. Факториал считается для чисел до 12. Если число больше, выводится "Число слишком велико".

var answer = prompt('посчитать факториал числа, для отрицательных не определен, для дробных не определен. Для 0 = 1. Для всех остальных перемножение всех чисел, включая его самого. Факториал считается для чисел до 12. Если число больше, выводится "Число слишком велико". Enter number');
if (answer > 12) {
    alert('very big number')
}
else if (parseInt(answer) != answer) {
    alert('undefined')
}
else if (answer < 0) {
    alert('undefined')
}
else if (answer == 0) {
    alert('= 1')
}
else {
    var result = 1;
    while (answer) {
        result = result * answer;
        answer = answer - 1;
    }
    alert(result)
};


