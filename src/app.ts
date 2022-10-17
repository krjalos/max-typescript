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