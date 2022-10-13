class Department {
  name: string;

  constructor(init: { name : string;}) {
    this.name = init.name;
  }
}

const it = new Department({name: "IT"});

console.log(it);