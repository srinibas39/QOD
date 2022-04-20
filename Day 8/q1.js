
const max=(...rest)=>{
    let max=rest[0];
    for(let i=1;i<rest.length;i++){
       if(rest[i]>max){
           max=rest[i];
       }
    }
    return max;
 }
 
 console.log(max(3,5)); 
 console.log(max(3,5,9,1));