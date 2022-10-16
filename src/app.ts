interface FuncInt {
  (a: number, b: number): number;
}

let add: FuncInt;

add = (a: number, b:number) => {
  return a + b;
}

console.log(add(5, 7));


interface human {
  name: string;
}

interface Person extends human{
  age?: number;

  print (connector: string): void;
}

class employee implements Person {
  name: string;
  age?: number;
  position: string;

  constructor (name: string, age?: number) {
    this.name = name;
    this.position = "Accountant";

    if(age) {
      this.age = age;
    }else {}
    this.age = 0;
  }

  print (connector: string) {
    console.log(`${this.name} ${connector} ${this.age}`);
  }
}

let p1 : Person;

p1 = new employee("Alex", 38)

p1.print("is")