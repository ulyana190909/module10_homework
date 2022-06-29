let number = prompt("Введите значение");
number = + number;

if (number == number && number % 2 === 0) {
    console.log("Вы ввели четное число")

} else if (number == number && number % 2 !== 0) {
    console.log("Вы ввели нечетное число")
} else if (Number.isNaN(number)) {
    console.log("Вы ввели не число")
}
else {
    console.log('Упс, кажется, вы ошиблись')
}

