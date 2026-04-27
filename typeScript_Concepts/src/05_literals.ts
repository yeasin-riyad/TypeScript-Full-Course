type Direction = "left" | "right" | "up";

function move(d: Direction) {
  console.log(d);
}

const d1 = "left"; //TS keeps literal type "left"
move(d1);

let d2 = "left"; // TS widens to string
// move(d2)

let d3: Direction = "left";

move(d3);
