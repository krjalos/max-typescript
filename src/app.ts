class Department {
  protected employees : string[] = [];
  #latestPrivate: string = "Test private sting";

  get latestPrivate() {
    if(this.#latestPrivate.length > 0){
      return this.#latestPrivate;
    }else {
      return "Not set";
    }
  }

  set latestPrivate(newString:string) {
    if(newString.length > 0){
      this.#latestPrivate = newString;
    }
  }

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
it.latestPrivate = "Latest private is set";

console.log(it.latestPrivate);

console.log(it);

class Admins extends Department {
  #masterPass : number = 123123;

  constructor(name: string, id: number, public admins: string[]) {
    super(name, id);
  }

  printAdmins(){
    console.log(this.admins);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  getMasterPass() {
    console.log(this.#masterPass);
  }
}

const admins = new Admins("Admins", 2, ["Alex", "Mira"]);

admins.printAdmins();
admins.printLatestPrivate();
admins.getMasterPass();

console.log(admins);
