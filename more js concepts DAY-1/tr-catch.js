function checkAge() {
    const agefield = document.getElementById('age')
    const agetext = agefield.value
    const errTag = document.getElementById('error')


    try {
        // console.log(object);
        const age = parseInt(agetext)
        if (isNaN(age)) {
            // console.log("Age not found", age, agetext);
            throw "Enter a number Plz"
        }
    }
    catch (err) {
        console.error("Error:", err);
        errTag.innerHTML = "ERROR :" + " " + err
    }
    finally {
        console.log("All done");
    }
    console.log(1222);
}