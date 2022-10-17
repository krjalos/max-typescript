// function Logger(identifier: string){
//   return (constructor: Function) => {
//     console.log(identifier);
//     console.log(constructor);
//   }
// }
//
// @Logger("Logging person")

function Template(customHtml: string, id: string){
  return (constructor: any) => {
    const element = document.getElementById(id) as HTMLElement;
    element!.innerHTML = customHtml;
    const person = new constructor();

    element!.querySelector('h1')!.innerHTML = person.name;
  }
}

@Template("<h1></h1>", "root")
class Person {
  name:string = "Alex";

  constructor(){
    console.log("Constructing");
  }
}

const alex = new Person();
console.log(alex);
