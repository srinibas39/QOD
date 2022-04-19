
const mask = (str) => {
    const strlength = str.length;//11
    const masklength = strlength > 4 ? strlength - 4 : 0;//7

    let newStr = "";
    for (let i = 0; i < masklength; i++) {
        newStr += "#"
    }

    for (let j = masklength; j < strlength; j++) {
        newStr += str[j];
    }


    return newStr;
}

let s = mask("neogcampIsTheBest");//#############Best
console.log(s);
