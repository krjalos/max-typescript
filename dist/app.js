"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Department_latestPrivate;
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // name: string;
        this.employees = [];
        _Department_latestPrivate.set(this, "Test private sting");
        this.name = name;
    }
    printName() {
        console.log(`This department name is ${this.name}`);
        console.log(`This department employees are ${this.employees}`);
    }
    addEmployee(name) {
        this.employees.push(name);
    }
    printLatestPrivate() {
        console.log(__classPrivateFieldGet(this, _Department_latestPrivate, "f"));
    }
}
_Department_latestPrivate = new WeakMap();
const it = new Department("IT", 1);
it.addEmployee("Alex");
it.addEmployee("Maria");
it.addEmployee("Mira");
it.printName();
it.printLatestPrivate();
console.log(it);
//# sourceMappingURL=app.js.map