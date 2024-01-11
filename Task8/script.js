var num1 = parseFloat(prompt("Введите первое число:"));
var num2 = parseFloat(prompt("Введите второе число:"));

var isMultiple = (num1 % num2 === 0);

console.log(`${num1} ${isMultiple ? 'кратно' : 'не кратно'} ${num2}`);
