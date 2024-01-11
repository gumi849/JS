var averageGrade = parseFloat(prompt("Введите средний балл:"));

if (averageGrade >= 1 && averageGrade <= 4) {
    console.log("Двоечник, иди учись!");
} else if (averageGrade >= 5 && averageGrade <= 8) {
    console.log("Неплохо, но давай еще поднажмем!");
} else if (averageGrade >= 9 && averageGrade <= 10) {
    console.log("Ого, да ты настоящий отличник!");
} else {
    console.log("Некорректный ввод.");
}
