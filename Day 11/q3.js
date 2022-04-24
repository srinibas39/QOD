
const KRotation = (num, k) => {
    const arr = num.toString().split("");
    const n = arr.length;

    reverse(arr, n - k, n - 1);
    reverse(arr, 0, n - k - 1);
    reverse(arr,0,n-1);

    return arr;

}


const reverse = (arr, l, r) => {

    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
const r = KRotation(1234, 2);
 console.log(r);


// const r=reverse([1,2,3,4],2,3);
// console.log(r);