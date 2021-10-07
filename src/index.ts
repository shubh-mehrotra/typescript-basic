let id: number = 10;
let company: string = "Encora";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3];
let arr: any[] = [1, true, "hello"];

// Tuple
let person: [number, string, boolean] = [1, "brand", true];

// Tuple Array
let employee: [number, string][];

employee = [
    [1, "shubh"],
    [2, "mehrotra"],
    [3, "test"],
    [4, "encora"],
];

// Union
let pid: string | number;

pid = "22";
pid = 22;

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}

// Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "shubh",
}

type Customer = {
    id: number,
    name: string
}

const customer: Customer = {
    id: 1,
    name: "shubh",
}

// Type Assertion
let cid: any = 1;

// 2 ways to achieve
let customerId = <number>cid;
let customerName = cid as string;


// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string): void {
    console.log(message);
}


// Interfaces
// interface don't support Union
interface CustomerInterface {
    // readonly id property
    readonly id: number,
    name: string,
    age?: number
    // optional age property
}

const customer1: CustomerInterface = {
    id: 1,
    name: "shubh",
}

// customer1.id = 5;

interface MathFunc {
    (x: number, y: number): number
}

// const add: MathFunc = (x: number, y: string): number => x + y;       // won't work
const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;


// Classes

interface PersonInterface {
    readonly id: number,
    name: string,
    age?: number,
    register(): string
}

class Person implements PersonInterface {
    id: number;
    name: string;
    age: number;
    // age: number;

    constructor(id: number, name:string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    register() {
        return `${this.name} is now registered`;
    }
}

const shubh = new Person(1, "shubh", 25);
const mehrotra = new Person(2, "mehrotra", 30);

// shubh.id = 2;
// shubh.name = "new_name";
shubh.age = 62;

// console.log(shubh.register());

// extending a class (subclass)
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, age: number, position: string) {
        super(id, name, age);
        this.position = position;
    }
}

const shubhEncora = new Employee(3, "shubham", 25, "SSE");

// console.log(shubhEncora);

// console.log(shubhEncora.register());


// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["shubh", "mehrotra", "encora", "bangalore"]);

// numArray.push("hello");
strArray.push("hello");