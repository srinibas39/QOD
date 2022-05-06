

const horizontally = (arr) => {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }

    return arr;

}

const invert = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            newArr.push(1)
        }
        else if (arr[i] === 1) {
            newArr.push(0)
        }
    }

    return newArr;
}
const horizontallyInvert=(image)=>{
    const newImage=[];
    for(let i=0;i<image.length;i++){
        const hRes=horizontally(image[i]);
        const iRes=invert(hRes);
        newImage.push(iRes);   
    }
    return newImage;

}

console.log(horizontallyInvert([[1,1,0],[1,0,1],[0,0,0]]));
