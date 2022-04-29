

const moveZeroesToEnd=(nums)=>{
    let countZeroes=0;
    const newArr=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            newArr.push(nums[i])
        }
        else{
            countZeroes++;
        }
    }
    for(let i=0;i<countZeroes;i++){
        newArr.push(0)
    }
  
    return newArr;

}   


let m=moveZeroesToEnd([0,2,0,3,12,0]);

console.log(m);//[ 2, 3, 12, 0, 0, 0 ]