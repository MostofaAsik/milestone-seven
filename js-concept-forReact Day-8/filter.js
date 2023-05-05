const products = [
    { name: "apple", price: 2000, brand: "love" },
    { name: "Banana", price: 1000, brand: "take" },
    { name: "Orange", price: 1400, brand: "watch" },

];
//thats means apple is out of array
const remainingProduct = products.filter(p => p.name !== "apple")
console.log(remainingProduct);