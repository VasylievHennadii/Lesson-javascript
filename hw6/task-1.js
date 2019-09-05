// Написать функцию функция принимает двумерный массив 4х4(массив числовой). Посчитать сумму диагональных элементов
function sumDiagonalsArr(a) {
    var sum1 = 0; 
    var sum2 = 0;   
    console.log (a)
    for (var i = 0; i < a.length; i++) {        
        sum1 = sum1 + a[i][i];        
        for (var j = 0; j < a.length; j++) {
            if ((i+j) === a.length-1) {
                sum2 = sum2 + a[i][j];
            }
        }
    }    
    return sum1 + sum2;
}
console.log(sumDiagonalsArr([[1,2,3,4],[2,5,4,5],[3,4,5,6],[4,5,6,7]]))