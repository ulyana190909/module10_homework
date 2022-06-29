let arr = new Map ([
    ["fruit", "apple"],
    ["vegetables" , "potato"],
    [20 , "tomato"],
    [null, "lime"],
    [true, "orange"]
])

for (let [key, value] of arr)  {
    console.log(`Ключ - ${key}, значение - ${value}`);
}

