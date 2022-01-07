//Type Declarations


//Declare Types without inititialization

let address: String;
let phoneNumber: String;
let email: String;
let sS: Number;
let isMarried: Boolean

// Declare some Types
let username: string = "Instructor"
let password: string = "password"

let instructorId: number = 1;

let greeting = "hello";

// Basic Types
//Primitives

//*Number
let age: number = 40;
let currentYear: number = 2022;
let balance: number = 1_000_000
//*string
let companyName: string;
companyName = "EFA";
let appName: string;
appName = "Twitter";
//*Boolean
let isLoggedIn: boolean = false;
let isAdmin: boolean = true;

//Arrays
//1
let studentList : string[] = ["timmy", "bobby"]
//2
let allScores: Array<number>= [0,1,2,3]

//* Any
let dataFromThirdParty : any = "12345";
typeof dataFromThirdParty;

//*Void
// A void type has no type at all. This is not really seen in variables but is more common to see in functions that return no value
function sayHelloToMyLittleFriend(): void {
    console.log("sayHelloToMyLittleFriend")
    // return "string"; Errors out because we have void above listing
}

//* Null & Undefined
let undefinedVariable: undefined = undefined; undefined
let nullVariable: null = null

//* Tuple
let usernameAndId: [string, number];

// let usernameAndId = ["something", 498578];

//* Enums - Allows us to give names to numeric values

enum Color {
    "Red",
    "Green",
    "Blue"
}
let selected:string = Color[Color.Red];

enum CardType {
    Ace = 1,
    Two,
    Three,
    Four,
}

let cardType : string = CardType[2];

//*Union Types
let x: number | string | boolean; //Will allow us to assign multiple meanings to a sing variable
x = 4958789;
x = "salutations";
x = true