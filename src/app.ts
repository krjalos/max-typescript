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
    console.log("Loading")
  }
}

type Vechicle = Car | Truck;

const v1 = new Car;
const v2 = new Truck();

const newVechicle = (vechicle : Vechicle) => {
  vechicle.drive();
  if(vechicle instanceof Truck) {
    vechicle.load();
  }
}

newVechicle(v1);
newVechicle(v2);

const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput2 = document.getElementById("user-input")! as HTMLInputElement;

console.log(userInput.value);
console.log(userInput2.value);

interface Owner {
  [prop: string]: number;
}

const v1Owner: Owner = {
  age: 28,
  licenseNumber: 12345
}