
const toSentenceCase=(sen)=>{
   const senArr=sen.split(" ");
   let s=senArr.map((el)=>{
      return el[0].toUpperCase()+el.slice(1)
   })
   return s.join(" ")
   
}

const s=toSentenceCase("we are neogrammers");
console.log(s);