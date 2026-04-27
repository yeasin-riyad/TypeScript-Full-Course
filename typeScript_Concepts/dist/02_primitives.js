"use strict";
let username = "sangam";
let age = 40;
let isCreator = true;
const big = 2n ** 63n - 1n;
//Operator '+' cannot be applied to types 'bigint' and 'number'.
// const mixed=big+age;
// 🔹 Symbol("TOKEN") কী?
// 👉 এটা JavaScript-এর Symbol type
// প্রতিবার Symbol("TOKEN") call করলে একটা completely unique value তৈরি হয়
// অন্য কোনো symbol-এর সাথে কখনো equal হবে না
const a = Symbol("TOKEN");
const b = Symbol("TOKEN");
// console.log(a === b); // false 😮
