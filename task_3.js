let string = "Hello";

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString(string));