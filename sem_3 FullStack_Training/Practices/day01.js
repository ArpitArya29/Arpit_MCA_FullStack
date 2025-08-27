// Create a program that writes "Hello Nodejs" into a file called "hello.txt", then read the content and print it into the colsole

const data = require("fs");

data.writeFileSync("hello.txt", "Hello Nodejs");

const read = data.readFileSync("hello.txt", "utf-8");
console.log("Read data:", read);
