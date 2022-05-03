
const defangedVersion=(str)=>{
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(str[i]=="."){
           newStr+="[.]"
        }
        else{
            newStr+=str[i]
        }
    }
    return newStr;
}

console.log(defangedVersion("255.100.50.0"));