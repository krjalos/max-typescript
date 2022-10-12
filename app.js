var userInput;
var userName;
userInput = "Alex";
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError("test error", 400);
