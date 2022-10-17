function Logger(identifier: string){
  return (constructor: Function) => {
    console.log(identifier);
    console.log(constructor);
  }
}

@Logger("Logging person")
class Person {
  name:string = "Alex";

  constructor(){
    console.log("Constructing");
  }
}

const alex = new Person();
console.log(alex);