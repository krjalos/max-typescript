class Department {
  name: string;

  constructor(init: { name : string;}) {
    this.name = init.name;
  }

  printName(this : Department) {
    console.log(`This department name is ${this.name}`);
  }
}

const it = new Department({name: "IT"});

it.printName();

const accounting = {name: "accounting", printName: it.printName}

accounting.printName();