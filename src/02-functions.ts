// In js we can have a function that takes in some num as a parameter then we can return a number. 
// function demoFunction(someNum) {
//     return someNum;
// }

// demoFunction(1);
// demoFunction("string");
// demoFunction(1, "asdf", true);

//We can call the function with a number as an argument.
//We cam call the function with a string as an argument.
//We can add arguments that weren't originally declared.

function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

addNumbers(1,2);
//! Error
// addNumbers(1, "");
// addNumbers(etc, "Test")

function hello(greetingString){
    return greetingString;
}

hello("hello");

//function with optional parameters
function showNameOrAge(
    firstName: string,
    lastName: string,
    age?: number ) {
console.log(firstName, lastName);
return age;
    }

showNameOrAge("Bob", "Quoka");