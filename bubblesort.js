function bubbleSort(array, compareFunction = swap){
    let trueCounter = 0;
    while (trueCounter < array.length){
        for (let i=0; i < array.length-trueCounter; i++){
            if(compareFunction(array, i, i+1) === 1) {
                l;
        }
        trueCounter++;
    }
    // console.log(array);
    // console.log('number of swaps: ', swapCounter);
    return array;
}

function swap (array, ind1, ind2) {
    if (array[ind1] < array[ind2]){
        return -1;
    }
    else if (array[ind1] > array[ind2]) {
        return 1;
    }
    // return temp;
}

function comparator (a, b) {
    if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
    if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
    return 0; // returning 0 means "a and b are equivalent"
  }

console.log(bubbleSort([6,5,3,1,8,7,2,4], comparator));