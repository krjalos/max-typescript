const add = (n1: number, n2 : number) => { // inferred function type number
  return n1 + n2;
}

const printResults = (number : number) : void => { // type of function that returns nothing
  console.log("Result is: " + number);
}

printResults(add(3, 5));