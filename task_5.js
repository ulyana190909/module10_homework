let arr = [15, 2, 'array', 'null'];
let countElementsArr = arr.length;

console.log(`Количество элементов: ${countElementsArr}`);

arr.map(function (item, index, array) {
    console.log(index + ": " + item);
})