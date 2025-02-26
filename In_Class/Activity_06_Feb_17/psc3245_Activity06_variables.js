/*
Peter Collins
Feb 18, 2024
Activity06 - Variables
*/

console.log("---- I am in V A R I A B L E S ----")

console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
// var var1 = 124;
console.log(var1);

// Is it permited ?
console.log("Yes or Not");
console.log("No, because we are redefining var1. Remove the var and it will work. \n")

console.log("Q2 ----------------");
let var2 = "Ames";
console.log(var2);
// let var2 = 124;

// Is it valid ?
console.log("Yes or Not");
console.log("No, because we are redefining var2. Remove the let and it will work. \n")

// Q3 : Is it valid ?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);
console.log("Valid ?")
console.log("Yes, this is valid \n")

// Q4 : Explain the Error.
console.log("Q4 ----------------");
let var4;
// const var5;
console.log("What's the error :")
console.log("The error comes from \"const var5;\". \n" +
    "This is invalid because constant variables must get a value. \n" +
    "You cannot initialize a constant without a value. \n")

// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
//var6 = 2.8;
console.log("What's the error :")
console.log("A const variable is not mutable. It cannot be changed. \n")

// Q6 : Explain the Error.
console.log("Q6 --------------")
// let first name = "Abraham";
console.log("Cannot have spaces in variable names. Must use camelCase or underscores");
//let 2numbers = [1,2];
console.log("Variables must start with an alphabetical character. Cannot start with number.");
//let city-state = "Ames Iowa";
console.log("Variable names cannot contain operands. This includes *, +, -, =, and more. \n");

// Q7 : What !! ??
console.log("Q7 --------------")
let mainCity = "DesMoines";
// console.log("This is the Capital :", MainCity)
console.log("Variables are case sensative. mainCity is not the same as MainCity, make sure capitalization is consistent. \n")

// Q8 : "let" and "const" scope vs "var" scope
console.log("Q8 --------------")
if (5 === 5) {
    var var7 = 100;
}
console.log(var7);
if (5 === 5) {
    let var8 = 100;
}
// console.log(var8);
console.log("The \"let\" creates a variable that is not accessible from outside it's current scope. \n" +
    "Using the keyword \"var\" creates a variable that is accessible anywhere after it's creation. \n")

