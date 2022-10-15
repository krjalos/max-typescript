"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Department_latestPrivate, _Admins_masterPass;
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        _Department_latestPrivate.set(this, "Test private sting");
        this.name = name;
    }
    get latestPrivate() {
        if (__classPrivateFieldGet(this, _Department_latestPrivate, "f").length > 0) {
            return __classPrivateFieldGet(this, _Department_latestPrivate, "f");
        }
        else {
            return "Not set";
        }
    }
    set latestPrivate(newString) {
        if (newString.length > 0) {
            __classPrivateFieldSet(this, _Department_latestPrivate, newString, "f");
        }
    }
    static createEmployee(name) {
        return { name: name, id: Math.random() };
    }
    addEmployee(name) {
        this.employees.push(name);
    }
    printLatestPrivate() {
        console.log(__classPrivateFieldGet(this, _Department_latestPrivate, "f"));
    }
}
_Department_latestPrivate = new WeakMap();
Department.deptGuide = "http://guide.com/url";
//
// const it = new Department("IT", 1);
//
// it.addEmployee("Alex");
// it.addEmployee("Maria");
// it.addEmployee("Mira");
//
// it.printName();
// it.printLatestPrivate();
// it.latestPrivate = "Latest private is set";
//
// console.log(it.latestPrivate);
//
// console.log(it);
class Admins extends Department {
    constructor(name, id, admins) {
        super(name, id);
        this.admins = admins;
        _Admins_masterPass.set(this, 123123);
    }
    printName() {
        console.log(`This department name is ${this.name}`);
        console.log(`This department employees are ${this.employees}`);
    }
    printAdmins() {
        console.log(this.admins);
    }
    addEmployee(name) {
        this.employees.push(name);
    }
    getMasterPass() {
        console.log(__classPrivateFieldGet(this, _Admins_masterPass, "f"));
    }
}
_Admins_masterPass = new WeakMap();
const admins = new Admins("Admins", 2, ["Alex", "Mira"]);
admins.printAdmins();
admins.printLatestPrivate();
admins.getMasterPass();
admins.printName();
console.log(admins);
console.log("_____________");
console.log(Department.deptGuide);
console.log(Department.createEmployee("Alex"));
//# sourceMappingURL=app.js.map