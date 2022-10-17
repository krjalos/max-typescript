function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name:string = "Alex";

  constructor(){
    console.log("Constructing");
  }
}

const alex = new Person();
console.log(alex);