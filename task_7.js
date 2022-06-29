let arr = [3, 4 , 5 , 'string-1', 6 ,7 , 0 ,'string-2'];
let even_number = 0;
let odd_number = 0;
let zero_number = 0;

for (let i = 0; i < arr.length ; i++) {
    if (typeof(arr[i]) === 'number' && arr[i] !== 0 && arr[i] % 2 === 0) {
        even_number++;
    }
    if (typeof(arr[i]) === 'number' && arr[i] % 2 !== 0) {
        odd_number++;
    }
    if (typeof(arr[i]) === 'number' && arr[i] === 0)
    zero_number++;
}

console.log(`четных элементов в массиве:  ${even_number}`);
console.log(`нечетных элементов в массиве:  ${odd_number}` );
console.log(`количество элементов в массиве со значением 0:  ${zero_number}`);