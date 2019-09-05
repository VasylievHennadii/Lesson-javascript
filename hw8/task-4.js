// 4. Дана строка надо после каждой гласной добавлять звук ля
// la
function strAddLa(a) {
    console.log(a)
    var c = '';
    for ( var i = 0; i < a.length; i++) {
        if ( a[i] === 'A' || a[i]==='E' || a[i]==='I' || a[i]==='O' || a[i]==='U' || a[i] === 'a' || a[i]==='e' || a[i]==='i' || a[i]==='o' || a[i]==='u') {
            c = c + a[i] + 'la';
        } else {
            c = c + a[i];
        }        
    }
    return c;
}
console.log(strAddLa('Write a function that takes an array of numbers. Add to Collection '))