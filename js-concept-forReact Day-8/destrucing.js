const array = [12, 14]
const [a, b] = array;
console.log(a);

function makeArray(num1, num2) {
    const newArray = [num1, num2];
    return newArray;
}
console.log(makeArray(99, 88));