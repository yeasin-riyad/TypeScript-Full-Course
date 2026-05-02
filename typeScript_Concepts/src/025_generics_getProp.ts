type UserN10 = {
  id: string;
  name: string;
  email?: string;
};

function getUserN10<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userExample: UserN10 = { id: "1", name: "Sangam" };

const extractId = getUserN10(userExample, "id");
console.log(extractId); // "1"

const extractName = getUserN10(userExample, "name");
console.log(extractName); // "Sangam"