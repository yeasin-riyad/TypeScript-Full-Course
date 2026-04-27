//interface -> named shape for objects
//🔹 1) Declaration Merging (Interface only)
interface User333 {
  id: number;
}

interface User333 {
  name: string;
}
//👉 automatically merge হয়ে যাবে:
// interface User333 {
//   id: number;
//   name: string;
// }

//❌ type এ এটা possible না
//-------------------------------------------------------------------
interface User333 {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const user333: User333 = {
  id: 1,
  name: "sangam",
  createdAt: new Date(),
  email: "xyz@gmail.com",
};

//🔹 2) Extend / Inheritance
// Interface -->
interface Admin333 extends User333 {
  permissions: string[];
}


const admin333: Admin333 = {
  id: 2,
  name: "sangam as admin",
  createdAt: new Date(),
  email: "xyz@gmail.com",
  permissions: ["admin"],
};

// Type -->
type Person = {
  name: string;
};

type User32 = Person & {
  id: number;
};
//👉 দুইটাই কাজ করে
//👉 কিন্তু syntax আলাদা
// ------------------------------------------------------------------------->
interface WithMeta1 {
  meta: {
    active: boolean;
  };
}

interface AdminWithMeta extends Admin333, WithMeta1 {}

const adminWithMeta333: AdminWithMeta = {
  id: 2,
  name: "sangam as admin",
  createdAt: new Date(),
  email: "xyz@gmail.com",
  permissions: ["admin"],
  meta: {
    active: true,
  },
};

//---------------------------------------------------------------->
// 🔹 3) Union & Advanced Types (Type only 🔥)
type Status1 = "success" | "error";
type ID = string | number;
// 👉 ❌ interface দিয়ে এটা করা যায় না
//---------------------------------------------------------------->

// 🔹 4) Primitive Alias
type Name = string;
// 👉 interface এটা করতে পারে না
// interface Name1=string;
//---------------------------------------------------------------->
// 5) Function Type
type Add = (a: number, b: number) => number;
// 👉 interface দিয়েও করা যায়, কিন্তু type বেশি clean
//---------------------------------------------------------------->
// 🔹 Real Example (Best Mix)
interface User4 {
  id: string;
  name: string;
}

type Role4 = "admin" | "user";

type AuthUser = User4 & {
  role: Role4;
};

