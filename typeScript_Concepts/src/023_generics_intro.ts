// understand what is "type paramter" <T>
// how typescript infers <T> from your arguments automatically

// is a function -> the types are "blanks" -> you fill in later
// <T> is a placeholder
// TS will try to understand what T should be

function id<T>(x: T): T {
  return x;
}
// infers T
// id(5) -> T is a number
// id('string') -> T is string
// id<number>(5)

const xyzz = id(5);
console.log(xyzz + 1, id(["sangam"]));

function firstGen<T>(arr: T[]): T | undefined {
  return arr[1];
}

console.log(firstGen([1, 2, 3, 4]));

// without generics -> (x: unknown)=> unknown
// with generics: (x: T)=> T // keep the exact type

function wrap<T>(value: T): { value: T } {
  return { value };
}
