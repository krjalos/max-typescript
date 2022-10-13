"use strict";
class Department {
    constructor(init) {
        this.name = init.name;
    }
    printName() {
        console.log(`This department name is ${this.name}`);
    }
}
const it = new Department({ name: "IT" });
it.printName();
const accounting = { name: "accounting", printName: it.printName };
accounting.printName();
//# sourceMappingURL=app.js.map