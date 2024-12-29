"use strict";
console.log('Hey there!');
class Player {
    constructor(first, last) {
        this._score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log('Shhh! This is a secret!');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(val) {
        if (val < 0) {
            throw new Error('Score must be greater than 0');
        }
        this._score = val;
    }
}
class SuperPlayer extends Player {
    constructor(first, last) {
        super(first, last);
        this._isAdmin = true;
    }
    superMethod() {
        console.log('I am a super method!');
    }
    get isAdmin() {
        return this._isAdmin;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`This jacket is from ${this.brand} and is ${this.color} in color.`);
    }
}
const player = new Player('John', 'Doe');
console.log(player.fullName); // John Doe
player.score = 10;
console.log(player.score); // 10
const superPlayer = new SuperPlayer('Tajinder', 'Singh');
console.log(superPlayer.fullName); // Tajinder Singh
superPlayer.superMethod(); // I am a super method!
console.log(superPlayer.isAdmin); // true
const bike = new Bike('red');
console.log(bike.color); // red
const jacket = new Jacket('Nike', 'black');
console.log(jacket.color); // black
jacket.print(); // This jacket is from Nike and is black in color.
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
    getAge() {
        return this.age;
    }
}
class FullTimeEmployee extends Employee {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(name, age, hourlyRate, hoursWorked) {
        super(name, age);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const fullTimeEmployee = new FullTimeEmployee('John Doe', 30, 50000);
console.log(fullTimeEmployee.getDetails()); // Name: John Doe, Age: 30
console.log(fullTimeEmployee.getSalary()); // 50000
console.log(fullTimeEmployee.getAge());
const partTimeEmployee = new PartTimeEmployee('Jane Doe', 25, 20, 160);
console.log(partTimeEmployee.getDetails()); // Name: Jane Doe, Age: 25
console.log(partTimeEmployee.getSalary()); // 3200
console.log(partTimeEmployee.getAge());
// generic class
class List {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
}
const numbers = new List();
numbers.add(1);
numbers.add(2);
const strings = new List();
strings.add('Hello');
strings.add('World');
console.log(numbers.getAll()); // [1, 2]
console.log(strings.getAll()); // ['Hello', 'World']
// generic function
function reverse(items) {
    return items.reverse();
}
const numbersArray = [1, 2, 3];
const reversedNumbers = reverse(numbersArray);
console.log(reversedNumbers); // [3, 2, 1]
const stringsArray = ['Hello', 'World'];
const reversedStrings = reverse(stringsArray);
console.log(reversedStrings); // ['World', 'Hello']
class Playlist {
    constructor() {
        this.queue = [];
    }
    addSong(song) {
        this.queue.push(song);
    }
    getPlaylist() {
        return this.queue;
    }
}
const playlist = new Playlist();
playlist.addSong({ title: 'Song1', artist: 'Artist1' });
playlist.addSong({ title: 'Song2', artist: 'Artist2' });
console.log(playlist.getPlaylist());
const moviePlaylist = new Playlist();
moviePlaylist.addSong({ title: 'Movie1', director: 'Director1', resolution: '1080p' });
moviePlaylist.addSong({ title: 'Movie2', director: 'Director2', resolution: '720p' });
console.log(moviePlaylist.getPlaylist());
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}
const circle = { kind: 'circle', radius: 5 };
const square = { kind: 'square', sideLength: 5 };
console.log(getArea(circle));
console.log(getArea(square));
// type guards
function isCircle(shape) {
    return shape.kind === 'circle';
}
function isSquare(shape) {
    return shape.kind === 'square';
}
function getAreaWithGuard(shape) {
    if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2;
    }
    else if (isSquare(shape)) {
        return shape.sideLength ** 2;
    }
    else {
        throw new Error('Invalid shape!');
    }
}
console.log(getAreaWithGuard(circle));
console.log(getAreaWithGuard(square));
// type assertion
const shape = { kind: 'circle', radius: 5 };
const circleShape = shape;
console.log(getArea(circleShape));
// equality narrowing
const num = 5;
const str = '5';
console.log(`compare const 5 of type int & string with "==" : ${num == str}`);
console.log(`compare const 5 of type int & string with "===" : ${num === str}`);
