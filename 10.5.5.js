let arrAnimals = ['leopard','leopard', 'leopard'];
//Вывод длины массива
console.log(arrAnimals.length);

//Вывод всех элементов массива
arrAnimals.forEach(element => console.log(element));

//Сравнение при помощи цикла
let result = true;
for (let i = 0; i < arrAnimals.length - 1; i++) {
    if (arrAnimals[i] !== arrAnimals[i + 1]) {
        result = false
    }
}
console.log(result)



