var examScore = parseFloat(prompt("Введите балл за экзамен (от 0 до 100):"));
var projectCount = parseFloat(prompt("Введите количество выполненных проектов:"));

var totalScore;

if (examScore > 90 || projectCount > 10) {
    totalScore = 100;
} else if (examScore > 75 && projectCount >= 5) {
    totalScore = 90;
} else if (examScore > 50 && projectCount >= 2) {
    totalScore = 75;
} else {
    totalScore = 0;
}

console.log("Общий выпускной балл:", totalScore);
