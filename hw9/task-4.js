//  For building the encrypted string:
//         - Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
//         - Do this n times!
    
//         - Examples:
//             "This is a test!", 1 -> "hsi  etTi sats!"
//             "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
    
//         - Write two methods:
//             encrypt(text, n)
//             decrypt(encryptedText, n)
    
//         - For both methods:
//             If the input-string is null or empty return exactly this value!
//             If n is <= 0 then return the input text.


// -----//------//----My solution to this kata is published on codewars.com----------//---------//-----//

function encrypt(text, n) {
  console.log(text.length)
  if (text===null || n===null || n<=0) { 
    return text;
  }  
  var str = '';
  for (var x = 0; x < n; x++) {  
    var oddStr = '';
    var evenStr = '';
    for (var i = 0; i < text.length; i++) {
      if ( i%2===0) {
        oddStr = oddStr + text[i]
      } else {evenStr = evenStr + text[i]}
    } str = evenStr + oddStr;
      text = str;      
  } 
  return str 
}
console.log( encrypt("This is a test!", 1) );// -> "hsi  etTi sats!"
console.log( encrypt("This is a test!", 2) );// -> "hsi  etTi sats!" -> "s eT ashi tist!"

function decrypt(encryptedText, n) {
  if (encryptedText===null || n<=0) { return encryptedText; }
  var text = encryptedText;  
  for ( var x = 0; x < n; x++) {
    var str = '';
    var halfLength = Math.floor(text.length/2)
    var oddArr = text.slice(halfLength,text.length);
    var evenArr = text.slice(0, halfLength);    
    for( var i = 0; i < halfLength; i++) {
      str = str + oddArr[i] + evenArr[i];
    }
    if (text.length % 2 !== 0) {
      str += oddArr[halfLength];
    }
    text = str;
  }
  return str;
}
console.log( decrypt("hsi  etTi sats!", 1) );// -> "This is a test!"
console.log( decrypt("s eT ashi tist!", 2) );// -> "This is a test!"

