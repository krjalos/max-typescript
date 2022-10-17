const exampleGenericArray: Array<string> = [];

exampleGenericArray[0] = "Test";
// exampleGenericArray[1] = 2; - not allowed


const testPromise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Test");
  }, 2000);
});

testPromise.then((result) => {
  console.log(result);
})


function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const merged = merge({name: "Alex"}, {age: 28});

console.log(merged.name);

function count<T extends {length: number}>(a: T): [T, number] {
  return [a, a.length];
}

console.log(count("Alex"));
console.log(count([1, 2, 3]));



function extractValue<T extends object, U extends keyof T>(a: T, b: U) {
  return a[b];
}

console.log(extractValue({name: "Alex"}, "name"));


class store<T> {
  private stored:T[] = [];

  addValue(value: T) {
    this.stored.push(value);
  }

  printStore() {
    console.log(this.stored);
  }
}

const numberStore = new store<number>();

numberStore.addValue(1);

const stringStore = new store<string>();

stringStore.addValue("sdf");

interface Course {
  title: string,
  description: string;
}

function addCourse(title: string, description:string): Course {
  let course: Partial<Course> = {};
  course.title = title;
  course.description = description;

  return course as Course;
}

console.log(addCourse("Type", "Best Course"));

const admins: Readonly<string[]> = ["Alex", "Mira"];

// admins.push(); - Not working