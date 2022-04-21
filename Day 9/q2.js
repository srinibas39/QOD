
const compare = (a, b) => a < b ? true : false;


const minDate = (d1, d2) => {
    const d1Arr = d1.split("/");
    const d2Arr = d2.split("/");
    let equal=true;
    for (let i = d1Arr.length - 1; i >= 0; i--) {
        if (d1Arr[i] !== d2Arr[i]) {
            equal=false;
            let c = compare(d1Arr[i],d2Arr[i]);
            if(c===true){
                return d1;
            }
            else{
                return d2;
            }
        }
    }
    if(equal===true){
        return "Both dates are equal"
    }
}

let d =minDate("24/01/2021","24/01/2021");
console.log(d);

