// partial<T> -> make all the top level fields optional

//Partial, Required, Readonly—এগুলোকে বলা হয় TypeScript Utility Types

// 🧠 Shallow vs Deep — মূল ধারণা
// 👉 Shallow (উপরের লেভেল পর্যন্ত)
// 👉 Deep (nested ভিতর পর্যন্ত)

type AddressN8 = {
  line1: string;
  city: string;
};

type User10 = {
  id: string;
  name: string;
  email?: string;
  address: AddressN8;
};

type UserPatch10 = Partial<User10>;   // শুধু top-level properties optional করে
// ভিতরের (nested) object (AddressN8) untouched থাকে

const patch10: UserPatch10 = { name: "sangam" };
const patch11: UserPatch10 = { address: { line1: "line1", city: "ci" } };

// const patch12: UserPatch10 = {
//   address: { line1: "line1"}  // ❌ city missing (Partial nested object এর field missing)
// };


// Required<T> → Shallow required
// সব top-level field required করে দেয়
// nested object change করে না
type UserAllRequiredN10 = Required<User10>;
const userAllPatch11: UserAllRequiredN10 = {
  id: "u2",
  name: "name2",
  address: { line1: "line2", city: "sangam" },
  email: "test",  //email এখন required
};


// Readonly<T> → Shallow readonly
//top-level fields immutable করে দেয়
// nested object change করে না

type ReadOnlyUserN10 = Readonly<User10>;
const readonlyUser: ReadOnlyUserN10 = {
  id: "u3",
  name: "name",
  address: {
    line1: "line3",
    city: "city123",
  },
};
// readonlyUser.name = 'newName'  // ❌ Error: Cannot assign to 'name' because it is a read-only property
//❗ কিন্তু nested object change করা যাবে:
readonlyUser.address.city = "newCity"; // এটা allowed, কারণ nested object readonly নয়


// Pick<T, K> -> select specific fields
// K extends keyof T -> K অবশ্যই T এর key হতে হবে

type PublicUserN10 = Pick<User10, "id" | "name">;
const publicUser: PublicUserN10 = { id: "u5", name: "sangan34" };

// Omit<T, K> - remove some keys
//👉 সব থাকবে, শুধু email বাদ
type UserWithoutEmailN10 = Omit<User10, "email">;
const omitUserN10: UserWithoutEmailN10 = {
  id: "u4",
  name: "name5",
  address: {
    line1: "d",
    city: "f",
  },
};

// omitUserN10.email = "that"

// Record<K, V>
type RoleK = "admin" | "user" | "editor";
type RoleCheck = Record<RoleK, User10>;

const dirN10: RoleCheck = {
  admin: {
    id: "u10",
    name: "admin",
    email: "mail@example.com",
    address: { line1: "line1", city: "city" },
  },
  user: { id: "u11", name: "user", email: "user@example.com", address: { line1: "line1", city: "city" } },
  editor: {
    id: "u12",
    name: "editor",
    email: "editor@example.com",
    address: { line1: "line1", city: "city" },
  },
};


type myRecord= Record<string, number>;
const myRec: myRecord = {
  a: 1,
  b: 2
};

// ⚠️ Main Takeaway (Very Important)
// 👉 TypeScript utility types by default:
// ✅ Shallow (top-level only)
// ❌ Deep না


// 🔥 Bonus: Deep করতে চাইলে?
// তুমি custom type বানাতে পারো:
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

const deepPatch: DeepPartial<User10> = {
  address: { line1: "only" } // ✅ no error
};