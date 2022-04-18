
const dateWithoutTime = (str) => str.split(",")[0];

const d=dateWithoutTime("Wed April 15,7 pm");
console.log(d);//Wed April 15

