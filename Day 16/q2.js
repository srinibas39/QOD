let elementMoreThan2Times = (nums, length) => {
    let newObj = nums.reduce((a, c) => a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }, {});
    let max = 0;
    let maxEle;
    for (let i in newObj) {
        if (newObj[i] > length / 2 && newObj[i] > max) {
            max = newObj[i];
            maxEle = i;
        }

    }
    return maxEle;
}

let e = elementMoreThan2Times([2, 2, 1, 1, 1, 2, 2], 7)
console.log(e);