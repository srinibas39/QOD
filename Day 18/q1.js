

const lenLastWord = (str) => {
    let ctr = 0;
    for (let i = str.length-1; i > 0; i--) {
        if (str[i] === " ") {
            break;
        }
        else {
            ctr++;
        }


    }
    return ctr;

}

let l = lenLastWord("hello neoGrammers you guys rock");
console.log(l);