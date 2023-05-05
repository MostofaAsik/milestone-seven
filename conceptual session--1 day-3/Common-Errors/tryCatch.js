
let acc;
try {

    console.log("Start Try");
    if (acc == undefined) throw "acc is not defined"
    acc
    console.log(acc);
    console.log("end try");
} catch (err) {
    console.log("Error:", err)
}