// let a:number = 10;
// let b: bigint = 21n;
// let c: string = "Hello, TypeScript!";
// let d: boolean = true;
// let e: null = null;
// let f: undefined = undefined;
// let g: symbol = Symbol("unique");
 
// let a: any = "Hello";
// let b: unknown = 21;

// a = 10; // No error, 'a' can be reassigned to any type
// console.log(a.toUpperCase()); // No error, but may cause runtime error if 'a' is not a string

// if(typeof b === "string") {
//     console.log(b.toUpperCase()); // No error, 'b' is treated as a string within this block
// }

// let arr:number[] = [32, 43, 54, 65, 76];
// let arr1: string[] = ["hello"];

// let arr: [number, string, boolean] = [32, "hello", true];

// const arr: [number, string] = [21, "33"]

// arr.push("Hi");

// console.log(arr); // Output: [21, "33", "Hi"]

let value: string | number | boolean = "hello";
if (typeof value === "string") {
    value = value.charAt(0).toUpperCase() + value.slice(1);
} else if (typeof value === "number") {
    value = value + 100;
} else if (typeof value === "boolean") {
    value = !value;
}
console.log(value);

