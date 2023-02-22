let fruits = new Map([

    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry", "blue"]

]);
for (let [key, value] of fruits) {
    console.log(`Ключ - ${key}, Значение - ${value}`);
}


fruits.forEach((value, key) => {
    console.log( `Ключ - ${key}, Значение - ${value}` );
});
