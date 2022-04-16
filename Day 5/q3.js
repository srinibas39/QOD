
const strReplace=(str,a,b)=>{
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(str[i].charAt(0)===a){
            newStr+=b;
        }
        else{
            newStr+=str[i]
        }
       
    }
    return newStr;
}

let s=strReplace("abcdefc","c","a");
 console.log(s);//abadefa
