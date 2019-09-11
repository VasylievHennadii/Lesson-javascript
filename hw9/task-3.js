// функция принимает строку содержащую телефонв и номера кредитных карт - заменить все данные на *******

function digitHiding(str) {      
    var regexp = /\d/g;
    var rep = '*'
    return str.replace(regexp, rep)
}
console.log(digitHiding('Phone number 234-456-5673 Nick \nCredit Card 5865 5895 4587 2563'))



