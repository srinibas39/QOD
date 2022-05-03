
const search = (str, c) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === c) {
            return i
        }
    }
}
const nonRepeatingCharacter = (str) => {
    const arr = str.split("");
    const newObj = arr.reduce((a, c) => a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }, {});

    let char = "";

    for (let i in newObj) {
        if (newObj[i] === 1) {
            char = i;
            break;
        }
    }
    if (char === "") {
        return -1;
    }
    else {

        const idx = search(str, char);
        return idx;
    }

}

let s = nonRepeatingCharacter("nneeooggccaammpp");
console.log(s);