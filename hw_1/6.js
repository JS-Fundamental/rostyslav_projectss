// 1 number
let myNumber = 42;
console.log(`Type of myNumber is ${typeof myNumber}`);

let myInfinity = 100 / 0; // Infinity
console.log(`Type of myInfinity is ${typeof myInfinity}`);

let myNaN = 'one' * 2; // NaN
console.log(`Type of myNaN is ${typeof myNaN}`);

// 2 bigint
let myBigInt = 55n;
console.log(`Type of myBigInt is ${typeof myBigInt}`);

// 3 string
let myString = 'Hello World!';
console.log(`Type of myString is ${typeof myString}`);

// 4 symbol. It represents a unique identifier. Mostly for debugging.
let mySymbol = Symbol('id');
console.log(`Type of mySymbol is ${typeof mySymbol}`);

// 5 boolean
let myBoolean = true;
console.log(`Type of myBoolean is ${typeof myBoolean}`);

// 6 undefined
let myUndefined;
console.log(`Type of myUndefined is ${typeof myUndefined}`);

// 7 null
// typeof null returns "object". It's a bug, saved for compatibility
let myNull = null;
console.log(`Type of myNull is ${typeof myNull}`);

// 8 object
const myObject = { 'a': 1 };
console.log(`Type of myObject is ${typeof myObject}`);

// typeof array returns "object"
const myArray = [ 10, 20, 30];
console.log(`Type of myArray is ${typeof myArray}`);

/* Functions belong to the object type. But typeof returns "function".
It is not correct. This comes from the early days of JavaScript 
*/
const myFunction = function hello () {};
console.log(`Type of myFunction is ${typeof myFunction}`);

