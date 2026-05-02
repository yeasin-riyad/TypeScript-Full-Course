// understand what is "type paramter" <T>
// how typescript infers <T> from your arguments automatically

// is a function -> the types are "blanks" -> you fill in later
// <T> is a placeholder
// TS will try to understand what T should be

//🔹 Generics (<T>) কি?
// 👉 <T> হলো type placeholder
// মানে আগে type fix করা হয় না, পরে TypeScript নিজে বুঝে নেয় যে T কি হবে

function id<T>(x: T): T {
  return x;
}

//🔹 Type Inference (Auto guess)
// id(5) -> T is a number
// id('string') -> T is string
// id<number>(5)

const xyzz = id(5);
console.log(xyzz + 1, id(["sangam"]));


//🔹 3. Array example
function firstGen<T>(arr: T[]): T | undefined {
  return arr[1];
}

// console.log(firstGen([1, 2, 3, 4]));
firstGen([1, 2, 3])       // T = number
firstGen(["a", "b"])      // T = string

// without generics -> (x: unknown)=> unknown
// with generics: (x: T)=> T // keep the exact type

// 🔹 4. Generics vs unknown
// ❌ Without generics
function test1(x: unknown): unknown {
  return x;
}
// 👉 Problem:
// তুমি return type জানো না
// use করতে গেলে type check করতে হবে

// ✅ With generics
function test<T>(x: T): T {
  return x;
}
// 👉 Advantage:
// exact type maintain হয়
// safer + smarter code


//🔹 5.Object wrap example
function wrap<T>(value: T): { value: T } {
  return { value };
}

wrap(10)        // { value: number }
wrap("hello")   // { value: string }
