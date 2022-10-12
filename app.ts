// const person : {
//   name : string;
//   age: number;
// } = {
const person : {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
} = {
  name: "Alex",
  age: 38,
  hobbies: ["chess", "swimming"],
  role: [1, "author"]
}

// person.role.push(10); -- allowed but incorrect
// person.role[1] = 10;  -- error
//person.role = [10, 10] -- error

let favoriteActivities: string[];

favoriteActivities = ["sports"];


console.log(person.name);