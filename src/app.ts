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