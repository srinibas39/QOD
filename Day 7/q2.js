
const palindrome = (str) => {


    const mid = parseInt(str.length / 2);

    let fh = "";
    let lh = "";
    for (let i = 0; i < mid; i++) {
        fh += str[i];
    }
    for (let j = str.length % 2 === 1 ? mid + 1 : mid; j < str.length; j++) {
        lh += str[j];
    }
    if (fh === lh.split("").reverse().join("")) {
        return "palindrome";
    }
    else {
        return "Not palindrome";
    }


}

let p = palindrome("1abba1");
console.log(p);