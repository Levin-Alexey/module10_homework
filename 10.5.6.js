let arrNumbers = [44, 20, 11, 10, 'JS', 0 , null];
let zero = 0;
let odd = 0;
let even = 0;
let other = 0;
for (let i = 0; i < arrNumbers.length; i++) {
    if (typeof arrNumbers[i] === 'number' && !isNaN(arrNumbers[i])) {
        if (arrNumbers[i] === 0) {
            zero = zero + 1;
        } else if (arrNumbers[i] % 2 === 0) {
            even = even + 1;
        } else if (arrNumbers[i] % 2 !== 0) {
            odd = odd + 1;
        }
    }
    else {
        other = other+1;
    }

}

console.log('Четных - '+ even + ' Не четных - ' + odd + ' Нулевых объектов - ' + zero + ' Других объектов - ' + other)