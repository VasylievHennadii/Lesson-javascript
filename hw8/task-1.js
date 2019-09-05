// 1. Ниписать игру в кости
function oneRollDice () {   
    var side1 = Math.floor( Math.random() * 6 ) + 1;
    var side2 = Math.floor( Math.random() * 6 ) + 1;        
    console.log(side1, side2);        
    return side1 + side2; 
};        
function rollDice() {        
    console.log('first player');
    var answer1 = oneRollDice();        
    console.log('second player');
    var answer2 = oneRollDice();
        if ( answer1 === answer2 ) {
        return ' Doubles! Need to repeat the move!';
    }
    return answer1 > answer2 ? 'first player win' : 'second player win';
};
console.log(rollDice());
