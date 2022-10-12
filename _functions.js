"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
const printResults = (number) => {
    console.log("Result is: " + number);
};
printResults(add(3, 5));
let combinedValues;
combinedValues = add;
console.log(combinedValues(7, 1));
const addAndHandle = (a, b, callback) => {
    callback(add(a, b));
};
addAndHandle(14, 15, printResults);
