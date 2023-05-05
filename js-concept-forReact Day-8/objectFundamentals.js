const person = {
    name: "Asik",
    age: 23
};

//dot notation
console.log(person.age);

//property name string
console.log(person['age']);


//varibale
const myAge = 'age'
console.log(person[myAge]);

// like object declaration
const { age, name } = person;
console.log(age, name);


const array = [12, 44, 66, 55, 33]
const [first, second, ...rest] = array
console.log(rest);