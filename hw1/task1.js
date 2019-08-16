// через prompt принимается число -> проверить простое ли оно (оба примера рабочие)

// Лучше всего преобразовывать в переменной
var answer = +prompt('Проверка простого числа. Enter number');
// Нужно объявлять переменные
var str = 'Число не было введено';

// Всегда нужно писать строгое сравнение
if (answer === 1) {
  alert('false');
} else if (answer > 1 && answer < 4) {
  alert('простое');
} else {
  for (d = 2; d <= (answer / 2); d++) {
    if (answer % d === 0 && answer !== d) {
      str = 'false';
      break;
    } else {
      str = 'простое';
    }
  }

  alert(str);
}

// Лучше всего преобразовывать в переменной
var answer = +prompt('Проверка простого числа. Enter number');
// Нужно объявлять переменные
var str = 'Число не было введено';

// Всегда нужно писать строгое сравнение
if (answer === 1) {
  alert('false');
} else if (answer > 1 && answer < 4) {
  alert('простое');
} else {
  var d = 2;

  while (d <= answer / 2) {
    if (answer % d === 0 && answer !== d) {
      str = 'false';
      break;
    } else {
      str = 'простое';
    }
    d = d + 1;
  }

  alert(str);
}
