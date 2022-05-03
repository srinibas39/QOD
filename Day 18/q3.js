
const search = (c, str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === c) {
            return i;
        }
    }
}
const match = (str1, str2) => {
    let newStr = "";
    let charIdx = search(str2[0], str1);
    for(let i=charIdx;i<=str.length;i++){
        if(i===str.length){
            i=i%str1.length;
        }
    }
}