localStorage.setItem("Nayok", 'Shakib Khan')
localStorage.setItem("age", '39')
const get = localStorage.getItem('age')
console.log(get);

const person = { firstName: "Abraham", LastName: "Linkon" }
const personString = JSON.stringify(person)
const personObject = JSON.parse(personString)
console.log(personObject.LastName);
localStorage.setItem("Person", personString)
