let userInput: unknown;
let userName: string;

userInput = "Alex";

if(typeof userInput === 'string') {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw {message: message, errorCode: code};
}

generateError("test error", 400);