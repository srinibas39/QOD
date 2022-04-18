
const removeSpace=(str)=>{
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            newStr+=str[i];
        }
    }
    return newStr;
}

const s=removeSpace("We are       neogrammers");

console.log(s);//Weareneogrammers