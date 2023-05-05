function a() {
    console.log("A");
    b()
    console.log("AA");

}
function b() {
    console.log("B");
    console.log("B");
    console.log("B");
    console.log("B");
    console.log("B");
    d()
    console.log("BB");
}
function d() {
    console.log("D");
    console.log("DD");
}
function x() {
    console.log("x");
    y()
    console.log("xx");
}
function y() {
    console.log("y");
    z()
    console.log("yy");
}
function z() {
    console.log("z");
    console.log("zz");
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
a()
x()
