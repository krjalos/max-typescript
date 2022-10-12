"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const person = {
    name: "Alex",
    age: 38,
    hobbies: ["chess", "swimming"],
    role: Role.AUTHOR
};
let favoriteActivities;
favoriteActivities = ["sports"];
console.log(person.role);
