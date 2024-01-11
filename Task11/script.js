var rentalDays = parseInt(prompt("Введите количество дней аренды:"));

var dailyRentalCost = 40;
var totalCost;

if (rentalDays >= 7) {
    totalCost = rentalDays * dailyRentalCost - 50;
} else if (rentalDays >= 3) {
    totalCost = rentalDays * dailyRentalCost - 20;
} else {
    totalCost = rentalDays * dailyRentalCost;
}

console.log("Общая стоимость аренды:", totalCost);
