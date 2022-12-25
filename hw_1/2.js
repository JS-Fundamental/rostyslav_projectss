////// var //////
console.log(`Calling variable with keyword var before initialization: ${age}`); // undefined
var age = 33;
console.log(`Calling variable with keyword var after initialization: ${age}`); // 33

////// let //////
// ReferenceError: Cannot access 'season' before initialization
// console.log(`Calling variable with keyword let before initialization: ${season}`); 
let season = 'winter';
console.log(`Calling variable with keyword let after initialization: ${season}`); // "winter"

