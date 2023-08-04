import { Knight } from "./Knight";

// Instance of Knight class gets a random start and end coordinates
const knight = new Knight();

console.log(knight.path);
console.log(knight.printPath());

console.log(knight.move([0, 0], [1, 2])); // => [[0,0],[1,2]]
console.log(knight.printPath());

console.log(knight.move([0,0],[3,3])); // => [[0,0],[1,2],[3,3]]
console.log(knight.printPath());

console.log(knight.move([3,3],[0,0])); // => [[3,3],[1,2],[0,0]]
console.log(knight.printPath());
