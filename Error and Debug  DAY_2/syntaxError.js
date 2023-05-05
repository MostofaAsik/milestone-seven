function isBigger(num) {
    if (num > 6) {
        return true
    }
    else {
        return false
    }
}
// }   >>>>>>>THIS BRACKET IS UNEXPECTED THATS FOR ITS SYNTAX ERROR

// const sum = a, b=> a + b  >>>>not closed with ()
const sum = (a, b) => a + b

console.log(sum(12, 13));


console.log(isBigger(11));