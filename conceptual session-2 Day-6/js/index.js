const showPrompt = () => {
    const promptField = prompt("Enter Your Number")
    const promptNumber = parseFloat(promptField)
    const result = promptNumber + 200;
    alert(result)
}
const showLocation = () => {
    const result = confirm("Location?")
    if (result === true) {
        // alert('http://127.0.0.1:5500/index.html');
        // console.log('http://127.0.0.1:5500/index.html');
        alert(location.href);


    }
    else {
        alert("No location ")
    }
}
function myFunction() {
    alert(location.hostname);
}