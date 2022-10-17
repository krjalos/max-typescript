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