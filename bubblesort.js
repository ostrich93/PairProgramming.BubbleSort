function bubbleSort(array, compareFunction = swap){
    let trueCounter = 0;
    while (trueCounter < array.length){
        for (let i=0; i < array.length-trueCounter; i++){
            //compareFunction(array, i, i+1); //replace with
            let temp = array[i+1];
            if (compareFunction(array, i, i+1) === 1){
                array[i+1] = array[i];
                array[i] = temp;
            }
        }
        trueCounter++;
    }

    //using comparator: in while loop, replace 

    // console.log(array);
    // console.log('number of swaps: ', swapCounter);
    return array;
}

// function swap (array, ind1, ind2) {
//     let temp = array[ind2];
//     if (array[ind1]> temp){
//         array[ind2] = array[ind1];
//         array[ind1] = temp;
//     }
//     // return temp;
// }

//replace swap with


function swap(array, ind1, ind2){
    if (array[ind1] < array[ind2]){
        return -1;
    }
    else if (array[ind1] > array[ind2]){
        return 1;
    }
    return 0;
}


console.log(bubbleSort([6,5,3,1,8,7,2,4]));