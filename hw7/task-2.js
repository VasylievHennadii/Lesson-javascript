// Нaписать функцию которая принимает строку и убирает в ней дублирующиеся пробелы(пользовать внутренние функции жс нельзя)
function strWithoutDuplicateSpaces(a) {
    var n = a.length;
    var str = '';
    for (var i = 0; i < n; i++) {
        if ( a[i] !== a[i+1] ) {           
            str = str + a[i]           
        } else if (a[i] !== ' ' && a[i+1] !== ' ') {
            str = str + a[i]
        }
    }
    return str;
}
var a = strWithoutDuplicateSpaces('my  hanna    name     is    John');
console.log(a)