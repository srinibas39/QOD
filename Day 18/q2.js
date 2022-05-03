

const anagram = (str1, str2) => {
    const str1Arr = str1.split("");
    let anagram = true;
    for (let i = 0; i < str2.length; i++) {
        if (!str1Arr.includes(str2[i])) {
            anagram = false;
            break;
        }
    }
    if (anagram === true) {
        return true
    }
    else {
        return false
    }
}

let a = anagram("pain", "gain");
console.log(a);