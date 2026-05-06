// ReturnType<F>
// Parameters<F>
//InstanceType<Ctor>
// ConstructorParameters<C>


// 🧠 1. as keyword কী?
// TypeScript-এ as মানে type assertion
// 👉 “আমি compiler-কে বলছি—এই value-টা এই type হিসেবে ধরো”
// value as Type
function ExtractUserInfo(id: string, isExtraInfo:boolean = false) {
  return {
    id,
    name: "Sangam",
    log: isExtraInfo ? "details" : (undefined as string | undefined),
  };
}

//1. ReturnType<F>
// 👉 এটা কী করে?
// ExtractUserInfo function যা return করে
// সেটার type automatically extract করে
type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>;
// 👉 Return type হবে:
// {
//   id: string;
//   name: string;
//   log: string | undefined;
// }

// 🔥 কেন useful?
// manually type লিখতে হয় না
// function change হলে type auto update হয়


//2. Parameters<F>
// 👉 এটা কী করে?
// function এর parameters এর type extract করে
type GetUserParamsInfo = Parameters<typeof ExtractUserInfo>;
// 👉 এটা return করে:
// [string, boolean?]

const argsInfo: GetUserParamsInfo = ["u1", true];
const argsInfo2: GetUserParamsInfo = ["u2"]; // isExtraInfo optional
const resultInfo: GetUserReturnInfo = ExtractUserInfo(...argsInfo2);

console.log(resultInfo);

class PersonN190 {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hi I am this -> ${this.name}`;
  }
}

// 3. InstanceType<Ctor> → class instance type
// 👉 এটা কী করে?
// class এর instance এর type extract করে
type PersonInstanceN1 = InstanceType<typeof PersonN190>;
// 👉 PersonInstanceN1 এর type হবে:
// {
//   name: string;
//   age: number;
//   greet(): string;
// }
type PersonCtorArgsN1 = ConstructorParameters<typeof PersonN190>;
// 👉 PersonCtorArgsN1 এর type হবে:
// [string, number]

const resultInfo1: PersonCtorArgsN1 = ["Sangam", 29];
const abc: PersonInstanceN1 = new PersonN190(...resultInfo1);

console.log(abc.greet());
