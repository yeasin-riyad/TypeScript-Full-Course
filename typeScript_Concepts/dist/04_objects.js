"use strict";
//email? : string  -> email may be absent , if its present it will be string
// it is not same as email : string | undefined
const user1 = { id: 1, name: "sangam", createdAt: new Date() };
const user2 = {
    id: 2,
    name: "john",
    createdAt: new Date(),
    email: "email",
};
const data = {
    likes: 10,
    views: 200,
    comments: 5,
    anything: 999
};
const c1 = { whatever: 1 };
// ⚠️ Problem
// 👉 Type safety কম
data.randomKey = 100; // allowed 😐
const c2 = { likes: 1, views: 2, shares: 3, random: 5 };
