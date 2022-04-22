

const sum = (digit) => digit.toString().split("").reduce((a, c) => a + Number(c), 0);

let s = sum(1234);
console.log(s);