// object shapes -> similar to interfaces
// union types (A | B)
// intersection types (A & B)

// Type alias মানে খুব সহজভাবে—
// 👉 কোনো type-কে একটা নাম (alias) দেওয়া, যাতে পরে সহজে reuse করা যায়।

type Person1 = {
  id: string;
  address: string;
  salary: number;
};

const person1: Person1 = {
  id: "1",
  address: "address",
  salary: 1234,
};

type Status22 = "new" | "paid" | "pending";

function nextActionCheck(s: Status22): string {
  switch (s) {
    case "new":
      return "new";
    case "paid":
      return "paid";
    case "pending":
      return "pending";

    default:
      return "default";
  }
}

type ToMerge1 = { price: number };
type ToMerge2 = { stock: number };

type MergedProductInfo = Person1 & ToMerge1 & ToMerge2;
