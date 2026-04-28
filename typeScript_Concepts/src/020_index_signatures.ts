type NumberDict = { [k: string]: number };

const counters: NumberDict = {};

counters["Likes"] = 1;
counters["Comments"] = 2;
counters["shares"] = 100;

type Metrices1={
    likes:number,
    views:number,
    shares:number
}

type Metrices = Record<"likes" | "views" | "shares", number>; // tight and safer
const mm: Metrices = { likes: 1, views: 100, shares: 23 };

// Scalability Example (এখানেই Record জিতে যায় 🔥)
type Keys = "likes" | "views" | "shares";
type Metrices11 = Record<Keys, number>;
// 👉 এখন শুধু Keys change করলেই সব update

//  Dynamic Case (Real Project)
const METRIC_KEYS = ["likes", "views", "shares"] as const;
type Metrices12 = Record<(typeof METRIC_KEYS)[number], number>;
// 👉 এটা industry-level pattern 🔥
// 👉 single source of truth

const priceMap = new Map<string, number>();
priceMap.set("likes", 1);

type LooseMap = Record<string, number | undefined>;
const lm: LooseMap = {};
lm["x"] = undefined;
lm["y"] = 100;
