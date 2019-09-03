// написать функцию которая будет проверять является ли строка пустой или содержащей одни пробелы. пустая или только пробелы - true
// нет - false
// внутренние функции нельзя использовать
function strEmptyOrSpaces(a) {     
    var c = 0;
    for ( i = 0; i < a.length; i++) {
        c = c + +a[i];
    }
    if (a.length === 0 || c === 0) {        
        return true
    }
    return false
}
var a = strEmptyOrSpaces('                                            ');
console.log(a)