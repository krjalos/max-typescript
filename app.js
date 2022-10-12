var add = function (n1, n2) {
    return n1 + n2;
};
var printResults = function (number) {
    console.log("Result is: " + number);
};
printResults(add(3, 5));
var combinedValues;
combinedValues = add;
console.log(combinedValues(7, 1));
