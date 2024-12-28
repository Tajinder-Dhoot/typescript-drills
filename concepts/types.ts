let myNumber : number = 4;
let myString : string = "Hello";
let myChar : string = 'a';
let myBool : boolean = true;
let myArray : number[] = [1, 2, 3];
let myTuple : [number, string] = [1, "Hello"];
let myEnum : number = 1;

// any skips type checking
let myAny : any = 1;
myAny = "Hello";

// following throws error
// numbers = "Hello"; //Type 'string' is not assignable to type 'number'.ts(2322)

console.log(myString.toLowerCase());

function add(a: number, b: number) {
    return a + b;
}

console.log(add(1, 2));

// object
type User = {
    readonly id: number,
    name: Name,
    age: number,
    isAdult: boolean,
    address: Address
}

type Name = {
    firstName: string,
    middleName?: string, // optional
    lastName: string
}

type Address = {
    street: string,
    unitNumber?: string, // optional
    city: string,
    province: string,
    postal: string
}

function getuserInfo(user : User) {
    return `${user.name.firstName} ${user.name.lastName} is ${user.age} years old and lives at ${user.address.street}, ${user.address.city}, ${user.address.province}, ${user.address.postal}`;
}

let user = {
    id : 1,
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    isAdult: true,
    address: {
        street: "123 Main St",
        city: "Toronto",
        province: "ON",
        postal: "M1M1M1"
    }
}

user.address.postal = "A1B2C3";
user.id = 3; // error as id is readonly

console.log(getuserInfo(user));

// intersection types
type color = {
    fontColor: string,
    backgroundColor: string
    borderColor: string
}

type size = {
    width: number,
    height: number
}

type button = color & size & {borderRadius?: number};

let myButton1 : button = {
    fontColor: "white",
    backgroundColor: "blue",
    borderColor: "black",
    width: 100,
    height: 50
}

let myButton2 : button = {
    fontColor: "white",
    backgroundColor: "blue",
    borderColor: "black",
    width: 100,
    height: 50,
    borderRadius: 5
}

console.log(`The button is ${myButton1.fontColor} with background ${myButton1.backgroundColor} and border ${myButton1.borderColor} and has width ${myButton1.width} and height ${myButton1.height}`);

console.log(`The button is ${myButton2.fontColor} with background ${myButton2.backgroundColor} and border ${myButton2.borderColor} and has width ${myButton2.width} and height ${myButton2.height} and border radius ${myButton2.borderRadius}`);

// array

var myArray1 : number[] = [1, 2, 3];
var myArray2 : Array<number> = [1, 2, 3];

var twoDimensionalArray : number[][] = [[1, 2], [3, 4]];

// union types
let myUnion : string | number = 1;
myUnion = "Hello";
myUnion = 6;
// myUnion = true; // error

//type narrowing
function addUnion(a: string | number, b: string | number) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

function calculateTax(price : number | string, tax : number) {
    if (typeof price === "string") {
        return price;
    }
    return price * tax;
}

console.log(`union for numbers: ${addUnion(1, 2)}`);
console.log(`union for strings: ${addUnion("Hello", "World")}`);

// array and union  
type stringOrNumberArray = Array<string | number>;

let myArray3 : stringOrNumberArray = [1, "Hello", 2, "World"];

type Point = {x: number, y: number};

type Loc = {lat: number, long: number};

const coordinates: (Point | Loc)[] = [];
coordinates.push({x: 1, y: 2});
coordinates.push({lat: 33.343, long: 289.098});

// literal types
let myLiteral : "Hello" = "Hello"; // only allowed value is "Hello"
// myLiteral = "World"; // error

type Direction = "left" | "right" | "up" | "down";
let myDirection : Direction = "left";
// myDirection = "top"; // error

//tuples
let myTuple1 : [number, string] = [1, "Hello"];
// myTuple1 = ["Hello", 1]; // error
console.log(myTuple1[0]);
console.log(myTuple1[1]);

type HTTPResponse = [number, string];
const typesOfResponses: HTTPResponse[] = [
    [200, "OK"],
    [404, "Not Found"],
    [500, "Internal Server Error"]
];

// enums
enum DirectionEnum {
    Up = 1,
    Down,
    Left,
    Right
}

let myDirectionEnum : DirectionEnum = DirectionEnum.Up;
console.log(myDirectionEnum);

// enums with string
enum DirectionEnumString {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let myDirectionEnumString : DirectionEnumString = DirectionEnumString.Up;
console.log(myDirectionEnumString);

enum HTTPResponseEnum {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}

let okHTTPResponse : HTTPResponseEnum = HTTPResponseEnum.OK;

// enums with computed values
enum FileAccess {
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write
}

let myAccess : FileAccess = FileAccess.ReadWrite;
console.log(myAccess);

// enums with reverse mapping
enum Enum {
    A
}

let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log(nameOfA);

// interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age: number
    nickname?: string
}

let user1 : UserInterface = {
    id: 1,
    name: "John",
    age: 30
}

let user2 : UserInterface = {
    id: 1,
    name: "Kayne",
    age: 30,
    nickname: "Yeezy" // optional
}

// user1.id = 2; // error as id is readonly

console.log(user1.name);

// interfaces with methods
interface UserInterfaceMethod {
    readonly id: number,
    name: string,
    age: number
    getFullName(): string
}

let user3 : UserInterfaceMethod = {
    id: 1,
    name: "Tajinder Singh",
    age: 30,
    isEmployed: true,
    getFullName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
}

console.log(user3.getFullName());

// reopen interfaces
interface UserInterfaceMethod {
    isEmployed: boolean
    getAge(): number
}

user3.getAge = function() {
    return this.age;
}

console.log(user3.getAge());

// extending interfaces
interface Admin extends UserInterfaceMethod {
    role: string
    changeRole(role: string): void
}

let admin : Admin = {
    id: 1,
    name: "Tajinder Singh",
    age: 30,
    isEmployed: true,
    role: "Software QA Anlyst",
    getFullName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
    changeRole(role: string) {
        this.role = role;
    }
}

admin.changeRole("Software Developer");
console.log(`${admin.getFullName()} who was a QA Analyst is now a ${admin.role}`);

// multiple interfaces
interface Human {
    name: string
}

interface Employee {
    readonly id: number
    email: number
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

let engineer : Engineer = {
    id: 1,
    name: "Tajinder Singh",
    email: 1234,
    level: "Intermediate",
    languages: ["JavaScript", "TypeScript", "C#"]
}

console.log(`${engineer.name} is a ${engineer.level} engineer who knows ${engineer.languages.join(", ")}`);
