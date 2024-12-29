console.log('Hey there!');

class Player {
    readonly first: string;
    readonly last: string;
    private _score: number = 0;

    constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    }

    private secretMethod() {
        console.log('Shhh! This is a secret!');
    }

    get fullName(): string {
    return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(val: number) {
        if (val < 0) {
            throw new Error('Score must be greater than 0');
        }
        this._score = val;
    }
}

class SuperPlayer extends Player {
    private _isAdmin : boolean = true;
    constructor(first: string, last: string) {
        super(first, last);
    }

    public superMethod() {
        console.log('I am a super method!');
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }
}

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }
}

class Jacket implements Colorful, Printable {
    public brand: string;
    public color: string;

    constructor(brand : string, color: string) {
        this.brand = brand;
        this.color = color;
    }

    print(): void {
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

abstract class Employee {
    constructor(public name: string, public age: number) {}
    abstract getSalary(): number;

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    public getAge(): number {
        return this.age;
    }
}

class FullTimeEmployee extends Employee {
    constructor(name: string, age: number, private salary: number) {
        super(name, age);
    }

    getSalary(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(name: string, age: number, private hourlyRate: number, private hoursWorked: number) {
        super(name, age);
    }

    getSalary(): number {
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
class List<T> {
    private data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }

    getAll(): T[] {
        return this.data;
    }
}

const numbers = new List<number>();
numbers.add(1);
numbers.add(2);

const strings = new List<string>();
strings.add('Hello');
strings.add('World');

console.log(numbers.getAll()); // [1, 2]
console.log(strings.getAll()); // ['Hello', 'World']

// generic function
function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

const numbersArray = [1, 2, 3];
const reversedNumbers = reverse(numbersArray);
console.log(reversedNumbers); // [3, 2, 1]

const stringsArray = ['Hello', 'World'];
const reversedStrings = reverse(stringsArray);
console.log(reversedStrings); // ['World', 'Hello']

interface Song {
    title: string;
    artist: string;
}

interface Movie {
    title: string;
    director: string;
    resolution: string;
}

class Playlist<T> {
    private queue: T[] = [];

    addSong(song: T): void {
        this.queue.push(song);
    }

    getPlaylist(): T[] {
        return this.queue;
    }
}

const playlist = new Playlist<Song>();
playlist.addSong({ title: 'Song1', artist: 'Artist1' });
playlist.addSong({ title: 'Song2', artist: 'Artist2' });
console.log(playlist.getPlaylist()); 

const moviePlaylist = new Playlist<Movie>();
moviePlaylist.addSong({ title: 'Movie1', director: 'Director1', resolution: '1080p' });
moviePlaylist.addSong({ title: 'Movie2', director: 'Director2', resolution: '720p' });
console.log(moviePlaylist.getPlaylist());

// type narrowing
type Shape = Circle | Square;

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}

const circle: Circle = { kind: 'circle', radius: 5 };
const square: Square = { kind: 'square', sideLength: 5 };

console.log(getArea(circle)); 
console.log(getArea(square)); 

// type guards
function isCircle(shape: Shape): shape is Circle {
    return shape.kind === 'circle';
}

function isSquare(shape: Shape): shape is Square {
    return shape.kind === 'square';
}

function getAreaWithGuard(shape: Shape): number {
    if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2;
    } else if (isSquare(shape)) {
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
const circleShape = shape as Circle;
console.log(getArea(circleShape));

// equality narrowing
const num : number = 5;
const str : string = '5';

console.log(`compare const 5 of type int & string with "==" : ${num == str}`);
console.log(`compare const 5 of type int & string with "===" : ${num === str}`);



