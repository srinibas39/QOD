

const areaOfHexagon=(len)=>{
    const area=((3*Math.sqrt(3)*(len**2))/2);
    const areaArr=(area+"").split(".")
    const decimal=areaArr[1].slice(0,2);
    const res=areaArr[0]+"."+decimal
    return res;
}
const a=areaOfHexagon(10);

console.log(a);