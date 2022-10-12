enum Role {ADMIN, AUTHOR, GUEST}

const person : {
  name: string;
  age: number;
  hobbies: string[];
  role: Role
} = {
  name: "Alex",
  age: 38,
  hobbies: ["chess", "swimming"],
  role: Role.AUTHOR
}

let favoriteActivities: string[];

favoriteActivities = ["sports"];


console.log(person.role);