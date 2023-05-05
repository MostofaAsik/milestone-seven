const showAlert = () => {
    alert("Alert ME")
}
const lendMoney = () => {
    const result = confirm('will you lend 500 taka?')
    // console.log(result);
    if (result === true) {
        alert("Tui amar janer jigar")
    }
    else {
        alert('tuui ekta sala...')
    }
}
const getInfo = () => {
    const result = prompt('Tell me your name?')
    console.log(result);
    if (result === null) {
        alert("Nam na dile Kam Nai")
    }
    else {
        alert("Welcome to my world")
    }
}