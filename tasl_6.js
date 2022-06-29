let arr = [3, 4, 5, 'string-1', 6, 7, 0, 5, 'string-2', 7, 7];
let result = {};

for (let i = 0; i < arr.length; ++i) {
    let a = arr[i];
    if (result[a] != undefined) {
        ++result[a];
    } else
        result[a] = 1;
}

for (let key in result) {
    if (result[key] > 1) {
        console.log(`(true) элемент массива: ${key} - повторяется ${result[key]} раза`)
    }
    else
    console.log(`false - элемент: ${key} является уникальным`)
}

