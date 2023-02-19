let value = null;

if (typeof value === "number") {
    console.log(value + ' - число');
} else if (typeof value === "string") {
    console.log(value + ' - строка');
} else if (typeof value === "boolean") {
    console.log(value + ' - логический тип');
} else {
    console.log('Тип ' + value + ' не определен');
}
