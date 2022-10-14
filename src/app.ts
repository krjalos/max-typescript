class Department {
  protected employees : string[] = [];
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

class Admins extends Department {
  constructor(name: string, id: number, public admins: string[]) {
    super(name, id);
  }

  printAdmins(){
    console.log(this.admins);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }
}

const admins = new Admins("Admins", 2, ["Alex", "Mira"]);

admins.printAdmins();
admins.printLatestPrivate();

console.log(admins);
