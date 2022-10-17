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
//# sourceMappingURL=app.js.map