const add = (n1: number, n2: number) => { // inferred function type number
  return n1 + n2;
}

const printResults = (number: number): void => { // type of function that returns nothing
  console.log("Result is: " + number);
}

printResults(add(3, 5));


let combinedValues : (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(7,1));


const addAndHandle = (a: number, b: number, callback: (a: number) => void) => {
  callback(add(a, b));
};

addAndHandle(14, 15, printResults);