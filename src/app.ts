class Department {
  // name: string;
  private employees : string[] = [];
  #latestPrivate: string = "Test private sting";

  constructor(public name : string, public readonly id: number) {
    this.name = name;
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

const it = new Department("IT", 1);

it.addEmployee("Alex");
it.addEmployee("Maria");
it.addEmployee("Mira");

it.printName();
it.printLatestPrivate();

console.log(it);