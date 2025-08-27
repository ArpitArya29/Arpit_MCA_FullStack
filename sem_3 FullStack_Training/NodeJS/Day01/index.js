console.log("Hello, from node");

// const data = require("fs"); // Creating the reference variable for handling the files

// // Writing into the file with the file reference
// data.writeFileSync("abc.txt", "Hello, writing into the file");

// // Reading from the file
// const readData = data.readFileSync("abc.txt", "utf-8");
// console.log("Data read form the file:", readData);


// const data1 = require("os");
// console.log(data1.platform());


// using the chalk package, used for styling
const data = require("chalk");
console.log(data.green("This is prompt printing with color:green"));
console.log(data.bgRed("A red coloured background"));


