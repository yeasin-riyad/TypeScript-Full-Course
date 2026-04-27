//email? : string  -> email may be absent , if its present it will be string
// it is not same as email : string | undefined

type User = {
  id: number; //required
  name: string;
  email?: string; //optional (could be absent)
  readonly createdAt: Date; //can not be reassigned
};

const user1: User = { id: 1, name: "sangam", createdAt: new Date() };
const user2: User = {
  id: 2,
  name: "john",
  createdAt: new Date(),
  email: "email",
};

// user1.createdAt = new Date()

type User2 = { email?: string };
type User3 = { email: string | undefined };
// const user3:User3={
//     email:undefined
// }

//----------------------------------------------------------------------------
//👉 এটাকে বলে index signature
// 🧠 মানে কী?
// এখানে k = যেকোনো string key
// value = number
// 👉 অর্থাৎ:
// 👉 object-এর key যা খুশি string হতে পারে, কিন্তু value অবশ্যই number
type Count = { [k: string]: number };

const data: Count = {
  likes: 10,
  views: 200,
  comments: 5,
  anything: 999
};

const c1: Count = { whatever: 1 };

// ⚠️ Problem
// 👉 Type safety কম

data.randomKey = 100; // allowed 😐

// ➡️ তুমি control করতে পারছো না কোন key valid

//-------------------------------------------------------------------------

// 👉 এটা অনেক বেশি powerful 💪
// 🧠 মানে কী?
// 👉 Record<K, V> =
// K = keys (specific list)
// V = value type
// 👉 এখানে:
// keys = "likes" | "views" | "shares" | "random"
// value = number

type Count1 = Record<"likes" | "views" | "shares" | "random", number>;



const c2: Count1 = { likes: 1, views: 2, shares: 3, random: 5 };


// 👉 ❌ Error (shares, random missing)
// const data1: Count1 = {
//   likes: 10,
//   views: 200
// };

// c2.comments = 5;
// 👉 ❌ Error (extra key allowed না)

// 🔥 Bonus: Custom Way (same as Record)
type Count2 = {
  likes: number;
  views: number;
  shares: number;
  random: number;
};

// 👉 এটা Record এর same but manually লেখা

//------------------------------------------------------------------>

//🔹 3.Example Data Types
type User5 = {
  id: string;
  name: string;
  email: string;
};

type Asset = {
  id: string;
  name: string;
  quantity: number;
};


//🔹 2.Error Structure (important)
type ApiError = {
  code: string;        // e.g. "VALIDATION_ERROR"
  message: string;     // human readable
  details?: unknown;   // validation errors / extra info
};


//🔹 1. Standard API Response Shape
type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: ApiError;
};

// 🔹4.API Response Examples
// ✅ Success Response
type GetUserResponse = ApiResponse<User>;