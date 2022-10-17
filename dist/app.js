"use strict";
// type Car = {
//   maxSpeed: number;
//   tires: string;
// }
//
// type Plane = {
//   fuel: string;
//   maxSpeed: number;
// }
//
// type vechicles = Car & Plane;
//
// let vechicle: vechicles;
//
// vechicle = {
//   maxSpeed: 100,
//   tires: "Michelin",
//   fuel: "diesel"
// }
//
// type FuelType = number | string | boolean;
// type Tires =  number | boolean;
//
// type VechicleParam = FuelType & Tires;
//
// let param: VechicleParam;
//
// param = 12;
var _a;
class Car {
    drive() {
        console.log("Driving");
    }
}
class Truck {
    drive() {
        console.log("Driving");
    }
    load() {
        console.log("Loading");
    }
}
const v1 = new Car;
const v2 = new Truck();
const newVechicle = (vechicle) => {
    vechicle.drive();
    if (vechicle instanceof Truck) {
        vechicle.load();
    }
};
newVechicle(v1);
newVechicle(v2);
const userInput = document.getElementById("user-input");
const userInput2 = document.getElementById("user-input");
console.log(userInput.value);
console.log(userInput2.value);
const v1Owner = {
    age: 28,
    licenseNumber: 12345
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return +a + +b;
    }
}
console.log(add("Alex", " mira").split(" "));
const fetchUserData = {
    name: "alex",
    age: 38,
    job: {
        title: "CEO",
        company: "FIE"
    }
};
console.log((_a = fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//# sourceMappingURL=app.js.map