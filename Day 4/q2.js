

const mergeSort = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let k = 0;
    res = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res[k] = arr1[i];
            i++;
            k++;
        }
        else {
            res[k] = arr2[j];
            j++;
            k++;
        }
    }

    while (i < arr1.length) {
        res[k] = arr1[i];
        i++;
        k++;
    }
    while (j < arr2.length) {
        res[k] = arr2[j];
        j++;
        k++;
    }
    return res;
}
const s = mergeSort([1, 3, 5], [2, 4, 6]);
console.log(s);//[1,2,3,4,5,6]