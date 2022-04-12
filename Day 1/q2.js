
const len=(arr)=>{
    let ctr=0;
    arr.forEach((el)=>ctr=ctr+1)
    return ctr;
}

const l=len([1,5,3,7,8]);
console.log(l);//5