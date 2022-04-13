
const idx=(arr,n)=>{
    let id=0;
    let flag=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n) {
            flag=true;
            id=i;
            break;
        }
    }
    if(flag===false){
        return "id not found"
    }
    else{
        return id;
    }
}


const i=idx([1,6,3,5,8,9],3);
console.log(i); //2