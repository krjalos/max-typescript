class Department {
  name: string;
  private employees : string[] = [];
  #latestPrivate: string = "Test private sting";

  constructor(init: { name : string;}) {
    this.name = init.name;
  }

  printName(this : Department) {
    console.log(`This department name is ${this.name}`);
    console.log(`This department employees are ${this.employees}`);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  printLatestPrivate () {
    console.log(this.#latestPrivate);
  }
}

const it = new Department({name: "IT"});

it.addEmployee("Alex");
it.addEmployee("Maria");
it.addEmployee("Mira");

it.printName();
it.printLatestPrivate();

console.log(it);