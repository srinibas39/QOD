
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
    let match=true;
    for(let i=charIdx;i<str1.length;i++){
        newStr+=str1[i];
    }
    for(let i=0;i<charIdx;i++){
        newStr+=str1[i];
    }

    for(let i=0;i<str2.length;i++){
        if(str2[i]!==newStr[i]){
             match=false;
             break;
        }
        
    }
    if(match===true){
        return true;
    }
    else{
        return false;
    }
    
}

let m=match("xyza","yzxa");
console.log(m);