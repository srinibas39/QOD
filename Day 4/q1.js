
const findMin = (...args) => {
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
        }
    }
    return min;
}

let s = findMin(3, 5);
let p = findMin(3, 5, 9, 1);
console.log(s);//3
console.log(p);//1
