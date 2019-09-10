// - Написать функцию принимающую массив и убирающую из него все не стринги
function stringArr(a) {
  var c = [];
  var n = a.length;
  var k = 0;

  for (var i = 0; i < n; i++) {
    if (typeof a[i] == 'string') {
      c[k] = a[i];
      k += 1;
    }
  }

  return c;
}

console.log(stringArr([1,0,2,'3',4,15,-5,35,'-4',0,0,'0','',5,6,8,'10']));

// Отступы
