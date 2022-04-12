

const shiftingCharacter = (str, n) => {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        newStr.push(String.fromCharCode(str[i].charCodeAt(0)+2));   
    }
    return newStr.join("");
}
let s = shiftingCharacter("neogcamp", 2);
console.log(s); //pgqiecor

