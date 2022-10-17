"use strict";
const exampleGenericArray = [];
exampleGenericArray[0] = "Test";
// exampleGenericArray[1] = 2; - not allowed
const testPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Test");
    }, 2000);
});
testPromise.then((result) => {
    console.log(result);
});
function merge(a, b) {
    return Object.assign(a, b);
}
const merged = merge({ name: "Alex" }, { age: 28 });
console.log(merged.name);
function count(a) {
    return [a, a.length];
}
console.log(count("Alex"));
console.log(count([1, 2, 3]));
//# sourceMappingURL=app.js.map