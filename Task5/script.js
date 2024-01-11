var myNumber = 5;

if (myNumber === 0) {
    myNumber = 1;
} else if (myNumber < 0) {
    myNumber = "less than zero";
} else {
    myNumber *= 10;
}

console.log("Результат:", myNumber);
