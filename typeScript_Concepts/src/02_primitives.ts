let username:string="sangam";
let age:number=40;
let isCreator:boolean=true;

const big:bigint= 2n ** 63n - 1n;

//Operator '+' cannot be applied to types 'bigint' and 'number'.
// const mixed=big+age;


// 🔹 Symbol("TOKEN") কী?
// 👉 এটা JavaScript-এর Symbol type
// প্রতিবার Symbol("TOKEN") call করলে একটা completely unique value তৈরি হয়
// অন্য কোনো symbol-এর সাথে কখনো equal হবে না
const a:unique symbol = Symbol("TOKEN");
const b:unique symbol = Symbol("TOKEN");

// console.log(a === b); // false 😮