"use strict";
// function Logger(identifier: string){
//   return (constructor: Function) => {
//     console.log(identifier);
//     console.log(constructor);
//   }
// }
//
// @Logger("Logging person")
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Template(customHtml, id) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const element = document.getElementById(id);
                element.innerHTML = customHtml;
                element.querySelector('h1').innerHTML = this.name;
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Alex";
        console.log("Constructing");
    }
};
Person = __decorate([
    Template("<h1></h1>", "root")
], Person);
const alex = new Person();
console.log(alex);
function Log(target, propertyName) {
    console.log("_________");
    console.log(target);
    console.log(propertyName);
}
function Log2(target, name, descriptor) {
    console.log("_________");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, position) {
    console.log("_________1");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Course {
    constructor(title, description) {
        this._attendees_number = 0;
        this.title = title;
        this.description = description;
        this.id = Math.floor(Math.random() * 100);
    }
    set attendees(attendee) {
        if (attendee > 0) {
            this._attendees_number = attendee;
        }
    }
    get attendees() {
        return this._attendees_number;
    }
    getIncome(price) {
        return this._attendees_number * price;
    }
}
__decorate([
    Log
], Course.prototype, "title", void 0);
__decorate([
    Log2
], Course.prototype, "attendees", null);
__decorate([
    Log2,
    __param(0, Log3)
], Course.prototype, "getIncome", null);
function Autobind(_, _2, descriptior) {
    const originalMethod = descriptior.value;
    const adjustedDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        }
    };
    return adjustedDescriptor;
}
class Printer {
    constructor() {
        this.message = "Clicked times: ";
        this.counter = 0;
    }
    showMessage() {
        console.log(this.message + this.counter++);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const buttonPrinter = new Printer();
const button = document.querySelector('button');
console.log(button);
button.addEventListener("click", buttonPrinter.showMessage);
//# sourceMappingURL=app.js.map