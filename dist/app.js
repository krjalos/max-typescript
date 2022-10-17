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
function Template(customHtml, id) {
    return (constructor) => {
        const element = document.getElementById(id);
        element.innerHTML = customHtml;
        const person = new constructor();
        element.querySelector('h1').innerHTML = person.name;
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
//# sourceMappingURL=app.js.map