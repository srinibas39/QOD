
const upperCase=(str)=>{
    let newStr=""
    for(let i=0;i<str.length;i++){
        let charcode=str[i].charCodeAt(0);
        if(charcode>=65 && charcode<=90){
           newStr+=String.fromCharCode(charcode)
        }
        else if(charcode>=97 && charcode<=122){
           newStr+=String.fromCharCode(charcode-32);
        }

    }
    return newStr;
}

let s=upperCase("abc");
console.log(s);//ABC


// 65 to 90
//97 to 122