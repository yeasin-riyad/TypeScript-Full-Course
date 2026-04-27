const xss = [1, 2, 34];
const ys: readonly number[] = [1, 2, 3];
const yss: ReadonlyArray<number> = [1, 2, 3];

xss[0] = 9; //mutable

//Can not re assign val
// yss.push(3)

//

function sum(nums: readonly number[]): number {
  let s = 0;
  for (const n of nums) s += n;
  return s;
}

console.log(sum(xss)); //passing mutable array in readonly param is allowed


const res = yss.map((n) => n * 8);
