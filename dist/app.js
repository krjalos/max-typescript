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
function extractValue(a, b) {
    return a[b];
}
console.log(extractValue({ name: "Alex" }, "name"));
class store {
    constructor() {
        this.stored = [];
    }
    addValue(value) {
        this.stored.push(value);
    }
    printStore() {
        console.log(this.stored);
    }
}
const numberStore = new store();
numberStore.addValue(1);
const stringStore = new store();
stringStore.addValue("sdf");
function addCourse(title, description) {
    let course = {};
    course.title = title;
    course.description = description;
    return course;
}
console.log(addCourse("Type", "Best Course"));
const admins = ["Alex", "Mira"];
// admins.push(); - Not working
//# sourceMappingURL=app.js.map