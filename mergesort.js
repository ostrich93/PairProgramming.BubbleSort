function split(wholeArray) {
    var halfWay = Math.floor(wholeArray.length/2);
    var firstHalf = wholeArray.slice(0, halfWay);
    var secondHalf = wholeArray.slice(halfWay);
    return [firstHalf, secondHalf]
}


// var anArray = [1,2,3,4,5,6,7];

// var splitArray = split(anArray);


// console.log(splitArray[0]);
// console.log(splitArray[1]);

// var mergedArr = splitArray[0].concat(splitArray[1]);

// console.log(mergedArr);

function merge(arr1, arr2){
    let newArr = [];
    while (newArr.length < (arr1.length + arr2.length)){
        if (!arr1.length && !arr2.length){
            return newArr;
        }
        if (!arr1.length && arr2.length){
            newArr.push(arr2.shift());
        }
        else if (!arr2.length && arr1.length){
            newArr.push(arr1.shift());
        }
        else {
            if (arr1[0] > arr2[0]){
                newArr.push(arr2.shift());
            }
            else {
                newArr.push(arr1.shift());
            }
        }
    }
    console.log(newArr);
    return newArr;
}

function mergeSort(arr1, arr2){
    
}