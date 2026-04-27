//strictNullChecks
//strict=true in tsconfig.json;
// let title : string = "intro"
// title = undefined

let subtitle: string | undefined = "sangam";

// void: function doesn't return a useful value
function log(msg: string): void {
  console.log(msg);
}

//never returns
function fail(msg: string): never {
  throw new Error(msg);
}

//DO NOT USE ANY  -> TRY TO IGNORE AS MUCH AS POSSIBLE

const valueAny: any = JSON.parse('{"x" : 1}');

valueAny.notThere.toFixed(2); // this compiles but can break/explode at runtime
