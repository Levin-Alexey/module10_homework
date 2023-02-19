
let value = prompt('Please, enter your value:');
value = +value;
if (isNaN(value) !== true && typeof value === 'number') {
    if (value === 0) {
        console.log("Вы ввели 0 или пустая строка!")
    } else if (value % 2 === 0) {
        console.log('Четное');
    } else {
        console.log('Не Четное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}
