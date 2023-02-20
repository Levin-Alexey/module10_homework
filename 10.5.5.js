let arrAnimals = ['lynx', 'lion', 'panther', 'cheetah', 'leopard',];
//Вывод длины массива
console.log(arrAnimals.length);

//Вывод всех элементов массива
arrAnimals.forEach(element => console.log(element));

//Сравнение при помощи цикла
let result;
for (let i = 0; i < arrAnimals.length - 1; i++) {
    if (arrAnimals[i] !== arrAnimals[i + 1]) {
        result = false
    }
}
console.log(result)


// сравнение при помощи Set (удаляем повторные элементы и сравниваем массивы)
let arrAnimalsSet = new Set(arrAnimals)

let arrAnimalsSetToArray = Array.from(arrAnimalsSet);

if (JSON.stringify(arrAnimals) == JSON.stringify(arrAnimalsSetToArray)) {
    console.log(true)
} else {
    console.log(false)
}

