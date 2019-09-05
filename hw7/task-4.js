// ниписать строку переводящую строку-число в число(внутренние функции использовать нельзя)
// + и парсинт низя
function strNumber(a) {     
    var c = 0;
    var k = a.length-1
    for ( var i = 0; i < a.length; i++) {
        if (a[i]!=='0' && a[i]!=='1' && a[i]!=='2' && a[i]!=='3' && a[i]!=='4' && a[i]!=='5' && a[i]!=='6' && a[i]!=='7' && a[i]!=='8' && a[i]!=='9') {
            return false
        }         
        c = c + a[i]*10**k
        k = k-1
    }
    return c
}
var a = strNumber('01562348970');
console.log(a)
