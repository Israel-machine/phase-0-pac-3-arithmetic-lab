function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;

}
function divide(a,b) {
    return a / b;
}
function increment(number = 952 ,n = 1) {
    return (number += n);
}   
function decrement(number = 952, n = 1 ) {
    return (number -= n);
}
function makeInt(n) {
    return parseInt(n,10);
}
function preserveDecimal(n) {
    return parseFloat(n);
}