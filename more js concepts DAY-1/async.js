// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log("Lazy Dog");
// }, 4000)
// console.log(4);
// console.log(5);
// console.log(6);

// let num = 0;
// const intervalId = setInterval(() => {
//     console.log(num++);
// }, 1000)

// // function doSomthing() {
// //     console.log(3);
// // }


// // function one() {
// //     console.log("A");
// //     two()
// //     console.log("C");
// // }
// // function two() {
// //     console.log("B");
// // }
// // one()


function showTime() {
    var date = new Date();
    var h = date.getHours();// 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();