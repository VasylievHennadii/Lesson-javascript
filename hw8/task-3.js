// 3. Сформировать из строки хэштег - "Моя первая няня" - "#МояПерваяНяня"

function strWithoutDuplicateSpaces(aa) {
    var n = aa.length;
    var str = '';
    for (var i = 0; i < n; i++) {
        if ( aa[i] !== aa[i+1] ) {           
            str = str + aa[i]           
        } else if (aa[i] !== ' ' && aa[i+1] !== ' ') {
            str = str + aa[i]
        }
    }
    return str;
}
var aa = strWithoutDuplicateSpaces('   моя      первая     няня');

function strHashtag(a) {     
    var c = '';      
    for (var i = 0; i < a.length; i++) {          
        if (a[i] === ' ') {
            c = c + a[i+1].toUpperCase();  
            i += 2;             
        }
        if ( a[i] !== ' ') {  
            c = c + a[i];
        }        
    } 
    return '#' + c[0].toUpperCase() + c.slice(1);
}
var a = aa;
console.log(strHashtag(a));




