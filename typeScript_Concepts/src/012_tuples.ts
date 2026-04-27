//tuples -> fixed length and fixed types
// (string | number)[]
//optional tuples

const userEntry: [string, number] = ["Sangam", 29];

type ResponseRow= [status: number, message?: string];

const r11: ResponseRow = [200];

const corners: readonly [number, number] = [0, 0];
