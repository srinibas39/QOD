

const replace = (arr, f, s) => arr.map((el) => el === f ? s : el)

const r = replace([1, 5, 3, 5, 6, 8], 5, 10)

console.log(r);//[ 1, 10, 3, 10, 6, 8 ]