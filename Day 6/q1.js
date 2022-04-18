
const countChar=(str)=>{
    let ctr=0;
    for(let i=0;i<str.length;i++){
       ctr++;
    }
    return ctr;
}

let c=countChar("neogcamp")
console.log(c);//8