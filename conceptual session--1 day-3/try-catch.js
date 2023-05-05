function checkAge() {
    const ageField = document.getElementById('age')
    const ageText = ageField.value;

    const errorTag = document.getElementById('error')



    try {
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw "Enter a number !"
            // console.log("age not a number", age, ageText);
        }
        else if (age < 18) {
            throw "Avobe 18 years not allow!! U r not avobe 18"
        }
        else if (age > 30) {
            throw "Maximum 30 years allowed"
        }
        errorTag.innerHTML = ""
    }
    catch (error) {
        console.log("Error :", error);
        errorTag.innerText = "ERROR: " + error;
    }
    finally {
        console.log("ALl done");
    }
    console.log(111);
}