// Принимается адрес дома в формате - индекс, город, улица , номер дома, квартира - провалидировать данный ввод

function validateAddress(address) {
    var regexp = /^\d{6}\s[a-z]+\s[\w-]+\s[a-z]+\s[\d-\/]+\s\d+$/i;	
    return regexp .test(address);
}
console.log(validateAddress('310100 Kharkiv 2-Vashenko str 19/2 152'))