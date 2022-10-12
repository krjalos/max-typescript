var combine = function (input1, input2, returnedType) {
    if (returnedType === void 0) { returnedType = 'as-number'; }
    var result;
    if (typeof input1 === 'number' && typeof input2 === "number" || returnedType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(combine(5, 10, 'as-string'));
console.log(combine(5, '10'));
console.log(combine("Alex", 'Beer', 'as-string'));
