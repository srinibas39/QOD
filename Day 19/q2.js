
const countVowelsAndConso = (str) => {

    let countObj = { vowel: 0, conso: 0 };
    const vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            countObj.vowel += 1;
        }
        else {
            countObj.conso += 1;
        }
    }
    return countObj;
}

let c = countVowelsAndConso("BookKeeper");
console.log(c);
