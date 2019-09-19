// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a      phone number.    
//         -   Example:
//                 createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//                 The returned format must be correct in order to complete this challenge. 
//                 Don't forget the space after the closing parentheses!




// -----//------//----My solution to this kata is published on codewars.com----------//---------//-----//


//-----------------------first option---------------------------------

function createPhoneNumber(numbers) {
    var str = ''
    str = '('+numbers[0] + numbers[1] + numbers[2]+')'+' '+numbers[3]+numbers[4]+numbers[5]+'-'+numbers[6]+numbers[7]+numbers[8]+numbers[9]
    return str
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

//-----------------------second option---------------------------------

function createPhoneNumber(numbers){
    var str = "(xxx) xxx-xxxx";    
    for(var i = 0; i < numbers.length; i++)    {
      str = str.replace('x', numbers[i]);
    }    
    return str;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// ---------The following solution options are taken from codewars.com---------

function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// --------------------------------------------------------------------

function createPhoneNumber(numbers){
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// --------------------------------------------------------------------

function createPhoneNumber(numbers){
    return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

