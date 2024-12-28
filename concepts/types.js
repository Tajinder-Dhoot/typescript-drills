"use strict";
let myNumber = 4;
let myString = "Hello";
let myChar = 'a';
let myBool = true;
let myArray = [1, 2, 3];
let myTuple = [1, "Hello"];
let myEnum = 1;
// any skips type checking
let myAny = 1;
myAny = "Hello";
// foloowing throws error
// numbers = "Hello"; //Type 'string' is not assignable to type 'number'.ts(2322)
console.log(myString.toLowerCase());
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function getuserInfo(user) {
    return `${user.name.firstName} ${user.name.lastName} is ${user.age} years old and lives at ${user.address.street}, ${user.address.city}, ${user.address.province}, ${user.address.postal}`;
}
let user = {
    id: 1,
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
};
user.address.postal = "A1B2C3";
user.id = 3; // error as id is readonly
console.log(getuserInfo(user));
let myButton1 = {
    fontColor: "white",
    backgroundColor: "blue",
    borderColor: "black",
    width: 100,
    height: 50
};
let myButton2 = {
    fontColor: "white",
    backgroundColor: "blue",
    borderColor: "black",
    width: 100,
    height: 50,
    borderRadius: 5
};
console.log(`The button is ${myButton1.fontColor} with background ${myButton1.backgroundColor} and border ${myButton1.borderColor} and has width ${myButton1.width} and height ${myButton1.height}`);
console.log(`The button is ${myButton2.fontColor} with background ${myButton2.backgroundColor} and border ${myButton2.borderColor} and has width ${myButton2.width} and height ${myButton2.height} and border radius ${myButton2.borderRadius}`);
// array
var myArray1 = [1, 2, 3];
var myArray2 = [1, 2, 3];
var twoDimensionalArray = [[1, 2], [3, 4]];
// union types
let myUnion = 1;
myUnion = "Hello";
myUnion = 6;
// myUnion = true; // error
//type narrowing
function addUnion(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function calculateTax(price, tax) {
    if (typeof price === "string") {
        return price;
    }
    return price * tax;
}
console.log(`union for numbers: ${addUnion(1, 2)}`);
console.log(`union for strings: ${addUnion("Hello", "World")}`);
let myArray3 = [1, "Hello", 2, "World"];
const coordinates = [];
coordinates.push({ x: 1, y: 2 });
coordinates.push({ lat: 33.343, long: 289.098 });
// literal types
let myLiteral = "Hello"; // only allowed value is "Hello"
let myDirection = "left";
// myDirection = "top"; // error
//tuples
let myTuple1 = [1, "Hello"];
// myTuple1 = ["Hello", 1]; // error
console.log(myTuple1[0]);
console.log(myTuple1[1]);
const typesOfResponses = [
    [200, "OK"],
    [404, "Not Found"],
    [500, "Internal Server Error"]
];
// enums
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["Up"] = 1] = "Up";
    DirectionEnum[DirectionEnum["Down"] = 2] = "Down";
    DirectionEnum[DirectionEnum["Left"] = 3] = "Left";
    DirectionEnum[DirectionEnum["Right"] = 4] = "Right";
})(DirectionEnum || (DirectionEnum = {}));
let myDirectionEnum = DirectionEnum.Up;
console.log(myDirectionEnum);
// enums with string
var DirectionEnumString;
(function (DirectionEnumString) {
    DirectionEnumString["Up"] = "UP";
    DirectionEnumString["Down"] = "DOWN";
    DirectionEnumString["Left"] = "LEFT";
    DirectionEnumString["Right"] = "RIGHT";
})(DirectionEnumString || (DirectionEnumString = {}));
let myDirectionEnumString = DirectionEnumString.Up;
console.log(myDirectionEnumString);
var HTTPResponseEnum;
(function (HTTPResponseEnum) {
    HTTPResponseEnum[HTTPResponseEnum["OK"] = 200] = "OK";
    HTTPResponseEnum[HTTPResponseEnum["NotFound"] = 404] = "NotFound";
    HTTPResponseEnum[HTTPResponseEnum["InternalServerError"] = 500] = "InternalServerError";
})(HTTPResponseEnum || (HTTPResponseEnum = {}));
let okHTTPResponse = HTTPResponseEnum.OK;
// enums with computed values
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
})(FileAccess || (FileAccess = {}));
let myAccess = FileAccess.ReadWrite;
console.log(myAccess);
// enums with reverse mapping
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log(nameOfA);
let user1 = {
    id: 1,
    name: "John",
    age: 30
};
let user2 = {
    id: 1,
    name: "Kayne",
    age: 30,
    nickname: "Yeezy" // optional
};
// user1.id = 2; // error as id is readonly
console.log(user1.name);
let user3 = {
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
};
console.log(user3.getFullName());
user3.getAge = function () {
    return this.age;
};
console.log(user3.getAge());
let admin = {
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
    changeRole(role) {
        this.role = role;
    }
};
admin.changeRole("Software Developer");
console.log(`${admin.getFullName()} who was a QA Analyst is now a ${admin.role}`);
let engineer = {
    id: 1,
    name: "Tajinder Singh",
    email: 1234,
    level: "Intermediate",
    languages: ["JavaScript", "TypeScript", "C#"]
};
console.log(`${engineer.name} is a ${engineer.level} engineer who knows ${engineer.languages.join(", ")}`);
