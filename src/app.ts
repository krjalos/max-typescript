interface Person {
  name: string;
  age: number;

  print (connector: string): void;
}

class employee implements Person {
  name: string;
  age: number;
  position: string;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
    this.position = "Accountant";
  }

  print (connector: string) {
    console.log(`${this.name} ${connector} ${this.age}`);
  }
}

let p1 : Person;

p1 = new employee("Alex", 38)

p1.print("is")