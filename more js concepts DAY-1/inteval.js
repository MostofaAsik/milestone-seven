console.log(1);
const intervalId = setInterval(() => {
    // num++;
    console.log(++num);
    if (num === 10) {
        clearInterval(intervalId)
    }
}, 1000)
console.log(2);
let num = 0;

console.log(4);
console.log(5);
setTimeout(() => {
    console.log("I am Mostofa Asik");
}, 1000)
console.log(6);
