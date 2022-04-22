


const deci2Binary = (num) => {
    let res = 0;
    let power = 1;
    let rem = 0;
    while (num > 0) {
        rem = num % 2; //2 can be any other base
        res += power * rem;
        power *= 10;
        num = parseInt(num / 2);
    }
    return res
}

let s = deci2Binary(5);
console.log(s);