// 👉 এখানে as const খুব important।
// 👉 এটা করলে:
// array readonly হয়ে যায়
// প্রতিটা value literal type হয়ে যায়
const ROLES = ["admin", "user", "operator"] as const;

// ➡️ Without as const:
// const ROLES: string[] = ["admin", "user", "operator"];

// ➡️ With as const:
// readonly ["admin", "user", "operator"]
// 👉 মানে:
// "admin" → literal type
// "user" → literal type
// "operator" → literal type

//derive a union from the array
type Role = (typeof ROLES)[number];

// 🔥 Step 2: Union type derive করা
// type Role = (typeof ROLES)[number];
// এটা একটু tricky কিন্তু powerful 💪
// 🧠 ভেঙে দেখি:
// 👉 typeof ROLES
// 👉 এর type:
// readonly ["admin", "user", "operator"]
// 👉 [number] কী?
// 👉 এর মানে:
// array-এর সব element-এর type বের করো
// ➡️ Result:
// "admin" | "user" | "operator"
// 🔹 Final Type
// type Role = "admin" | "user" | "operator";
// 👉 এটাকেই বলে union type

// 🔥 কেন এই pattern use করা হয়?
// 👉 DRY (Don't Repeat Yourself)
// তুমি এক জায়গায় define করছো:
// const ROLES = [...] as const
// 👉 তারপর automatically type বানাচ্ছো
// 👉 manually union লিখতে হচ্ছে না


// Without this pattern 😬
// type Role = "admin" | "user" | "operator";
// 👉 পরে যদি array change করো, type update করতে ভুল হতে পারে


// 🔥 Real-life Use Case
// 👉 API roles, permissions, status:
const STATUS = ["pending", "approved", "rejected"] as const;
type Status = (typeof STATUS)[number];

// 🧠 Final Insight
// as const → literal + readonly
// typeof → type বের করে
// [number] → array element union বানায়

// 👉 Result = safe + scalable + maintainable code 🔥

function setRole(r: Role) {
  console.log(r);
}

setRole("user");
