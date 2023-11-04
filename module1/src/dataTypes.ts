// primitives data types

// string types
let fullName: string = "Kakon Debnath";

// number types
let mobileNumber: number = 1748902839;

// boolean types
let isRegistered: boolean = true;

// undefined types

let text: undefined = undefined;

// null types

let data: null = null;

// non primitive types
// array types
let names: string[] = ["kakon", "roni"];
let phoneNumbers: number[] = [123, 124];
// tuple types 
let nameAge: [string, number] = ["john", 35]

// object types
let parson: {
    readonly company: "Google", // own type name --> literal type
    firstName: string,
    lastName?: string, //optional data type
    rollNo: number,
    phone: number,
    languages: string[],
    isMarried: boolean,
} = {
    company: "Google",
    firstName: "John",
    lastName: "doe",
    rollNo: 123,
    phone: 123456,
    languages: ["English", "Bangla", "Hindi"],
    isMarried: true,
}

// function in typescript

function add(num1: number = 10, num2: number): number {
    return num1 + num2
}
add(5, 10)

const sum = (num1: number, num2: number): number => num1 + num2

// object with functions

const user: {
    fName: string;
    lName: string;
    balance: number;
    addBalance(balance: number):number;
} = {
    fName: "Kakon",
    lName: "Debnath",
    balance: 0,
    addBalance(balance: number) {
        return this.balance + balance;
    }
}



// type with array mapping

const array: number[] = [1, 2, 3, 4];

const newNumber: number[] = array.map((n: number): number => n * n)


