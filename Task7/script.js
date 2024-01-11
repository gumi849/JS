var num1 = parseFloat(prompt("Введите первое число:"));
var num2 = parseFloat(prompt("Введите второе число:"));

var maxNumber = (num1 >= num2) ? num1 : num2;

console.log("Большее число:", maxNumber);
