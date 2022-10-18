// function Logger(identifier: string){
//   return (constructor: Function) => {
//     console.log(identifier);
//     console.log(constructor);
//   }
// }
//
// @Logger("Logging person")

function Template(customHtml: string, id: string){
  return function<T extends {new (...args: any[]) : {name: string}}>(originalConstructor: T) {
    return class extends originalConstructor{
      constructor(..._: any[]) {
        super();

        const element = document.getElementById(id) as HTMLElement;
        element!.innerHTML = customHtml;
        element!.querySelector('h1')!.innerHTML = this.name;
      }
    }
  }
}

@Template("<h1></h1>", "root")
class Person {
  name:string = "Alex";

  constructor(){
    console.log("Constructing");
  }
}

const alex = new Person();
console.log(alex);




function Log(target: any, propertyName: string | Symbol) {
  console.log("_________");
  console.log(target);
  console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("_________");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, position: number) {
  console.log("_________1");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Course {
  @Log
  title: string;
  id: number;
  description: string;
  private _attendees_number: number = 0;

  @Log2
  set attendees (attendee: number){
    if(attendee > 0){
      this._attendees_number = attendee;
    }
  }

  get attendees(){
    return this._attendees_number;
  }

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.id = Math.floor(Math.random() * 100);
  }

  @Log2
  getIncome(@Log3 price: number) {
    return this._attendees_number * price;
  }
}


function Autobind(_: any, _2: string | any, descriptior: PropertyDescriptor) {
  const originalMethod = descriptior.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    }
  }

  return adjustedDescriptor;
}

class Printer {
  message = "Clicked times: ";
  counter = 0;

  @Autobind
  showMessage() {
    console.log(this.message + this.counter++);
  }
}

const buttonPrinter = new Printer();

const button = document.querySelector('button')!;
console.log(button);

button.addEventListener("click", buttonPrinter.showMessage);