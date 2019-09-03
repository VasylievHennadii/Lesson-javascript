// написать функцию, которая будет принимать строку и возвращать является ли строка полиндромом или нет(true false)
function strPalindrom(a) {
    var n = a.length;
    for ( var i = 0; i < n; i++) {
        if (a[i] !== a[n - 1 -i]) {
            return false
        } 
    } return true
}
var a = strPalindrom('kokkok');
console.log(a)