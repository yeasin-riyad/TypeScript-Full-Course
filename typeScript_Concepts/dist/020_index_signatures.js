"use strict";
const counters = {};
counters["Likes"] = 1;
counters["Comments"] = 2;
counters["shares"] = 100;
const mm = { likes: 1, views: 100, shares: 23 };
// 👉 এখন শুধু Keys change করলেই সব update
//  Dynamic Case (Real Project)
const METRIC_KEYS = ["likes", "views", "shares"];
// 👉 এটা industry-level pattern 🔥
// 👉 single source of truth
const priceMap = new Map();
priceMap.set("likes", 1);
const lm = {};
lm["x"] = undefined;
lm["y"] = 100;
