
const countChar = (str) => {
    strArr = str.split("");
    let freq = strArr.reduce((a, c) => a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }, {});
    let max = 0;
    let maxChar = "";
    for (let char in freq) {
        if (freq[char] > max) {

            max = freq[char];
            maxChar = char;
        }
    }
    return maxChar;
}

let c = countChar("abbbc");
console.log(c);