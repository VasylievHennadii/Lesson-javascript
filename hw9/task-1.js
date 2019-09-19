// Написать функцию которая принимать на вход строку мыейла - и выдавать валидная она или нет. 

function validateEmail(email) {
  var regexp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;	
  return regexp .test(email);
}
console.log(validateEmail('DFail852@email.com'))