

const pow=(a,b)=>{
    let product=1;
    for(let i=0;i<b;i++){
      product*=a;
    }
    return product;
}

let res=pow(2,3);

console.log(res);//8