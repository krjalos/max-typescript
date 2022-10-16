"use strict";
let add;
add = (a, b) => {
    return a + b;
};
console.log(add(5, 7));
class employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.position = "Accountant";
    }
    print(connector) {
        console.log(`${this.name} ${connector} ${this.age}`);
    }
}
let p1;
p1 = new employee("Alex", 38);
p1.print("is");
//# sourceMappingURL=app.js.map