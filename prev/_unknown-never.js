"use strict";
let userInput;
let userName;
userInput = "Alex";
if (typeof userInput === 'string') {
    userName = userInput;
}
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
generateError("test error", 400);
//# sourceMappingURL=_unknown-never.js.map