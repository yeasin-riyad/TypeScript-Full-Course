//  Type inference (টাইপ ইনফারেন্স) হলো TypeScript-এর একটা smart feature যেখানে 
// তুমি নিজে টাইপ না লিখলেও, TypeScript নিজেই বুঝে নেয় ভ্যারিয়েবল বা ফাংশনের 
// টাইপ কী হবে।
// সহজভাবে:
// 👉 “TypeScript guesses the type automatically”
// 🔹 Basic Example
// let name = "Yeasin";
// এখানে তুমি : string লেখোনি, কিন্তু TypeScript বুঝে ফেলেছে:
// 👉 name = string
// 🔹 When Inference Can Be Dangerous ⚠️
// let data;
// data = 10;
// data = "hello";
// 👉 inferred type: any 😱
// ➡️ এটা dangerous কারণ:
// type safety নষ্ট হয়ে যায়
// 🔹 Best Practice
// 👉 যেখানে clear, সেখানে inference use করো
// 👉 যেখানে ambiguity আছে, সেখানে explicit type দাও
// let name: string = "Yeasin"; // explicit
// 💡 Summary
// Type inference = automatic type detection
// Code clean করে
// কম লিখতে হয়
// কিন্তু ভুল জায়গায় use করলে any হয়ে যেতে পারে
// -------------------------------------------------------------------------
let count = 0;
//const মানে value change হবে না
// তাই TypeScript exact value ধরে রাখে । তাই type string হবে না।
// 👉type হয়: const site: "abcd.com"
const site = "abcd.com";
const socres = [10, 20, 30];
export function add(a, b) {
    return a + b;
}
//over annotaion isnt bad  -> just noisy  
export function addAnnotation(a, b) {
    return a + b;
}
;
//You should also annotate when the type is not obvious
let maybe;
maybe = Math.random() > 0.5 ? "test" : 10;
