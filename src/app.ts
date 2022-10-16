type Car = {
  maxSpeed: number;
  tires: string;
}

type Plane = {
  fuel: string;
  maxSpeed: number;
}

type vechicles = Car & Plane;

let vechicle: vechicles;

vechicle = {
  maxSpeed: 100,
  tires: "Michelin",
  fuel: "diesel"
}

type FuelType = number | string | boolean;
type Tires =  number | boolean;

type VechicleParam = FuelType & Tires;

let param: VechicleParam;

param = 12;
