function split(wholeArray) {
    const halfWay = Math.floor(wholeArray.length/2);
    const firstHalf = wholeArray.slice(0, halfWay);
    const secondHalf = wholeArray.slice(halfWay);
    return [firstHalf, secondHalf];
}


// var anArray = [1,2,3,4,5,6,7];

// var splitArray = split(anArray);


// console.log(splitArray[0]);
// console.log(splitArray[1]);

// var mergedArr = splitArray[0].concat(splitArray[1]);

// console.log(mergedArr);

function merge(arr1, arr2){
    console.log(arr1,arr2);
    let newArr = [];
    //let totalLength = arr1.length + arr2.length;
    let leftInd = 0;
    let rightInd = 0;
    while (leftInd < arr1.length && rightInd < arr2.length){
    //     if (!arr1.length && !arr2.length){
    //         return newArr;
    //     }
    //     if (!arr1.length && arr2.length){
    //         newArr.push(arr2.shift());
    //     }
    //     else if (!arr2.length && arr1.length){
    //         newArr.push(arr1.shift());
    //     }
    //     else {
    //         if (arr1[0] > arr2[0]){
    //             newArr.push(arr2.shift());
    //         }
    //         else {
    //             newArr.push(arr1.shift());
    //         }
    //     }
        if (arr1[leftInd] < arr2[rightInd]){
            newArr.push(arr1[leftInd]);
            leftInd++;
        }
        else {
            newArr.push(arr2[rightInd]);
            rightInd++;
        }
    }
    for (; leftInd < arr1.length; leftInd++){
        newArr.push(arr1[leftInd]);
    }
    for (; rightInd < arr2.length; rightInd++){
        newArr.push(arr2[rightInd]);
    }
    //console.log(newArr);
    return newArr;
}

function mergeSort(array){
    //for sublists, do split on popped/shifted array
    if (array.length < 2){
        return array;
    }
    let sublists = split(array);
    let left = sublists[0];
    let right = sublists[1];
    return merge(mergeSort(left), mergeSort(right));

}