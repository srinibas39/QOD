

const revSen=(sen)=>{
   const senArr=sen.split(" ");
   const res=[];
   for(let i=0;i<senArr.length;i++){
       res.push(senArr[i].split("").reverse().join(""))
   }
   return res.join(" ");
}

let s=revSen("We are neogrammers");
console.log(s);//eW era sremmargoen