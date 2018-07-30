function split(wholeArray) {
    var halfWay = Math.floor(anArray.length/2);
    return [wholeArray.slice(0, halfWay), wholeArray.slice(halfWay)]
}


var anArray = [1,2,3,4,5,6,7];

var splitArray = split(anArray);


console.log(splitArray[0]);
console.log(splitArray[1]);

var mergedArr = splitArray[0].concat(splitArray[1]);

console.log(mergedArr);

function merge(arr1, arr2){
    let newArr = [];
    while (newArr.length < (arr1.length + arr2.length)){
        if (!arr1 && !arr2){
            return newArr;
        }
        if (arr1.length < 1 && arr2){
            newArr.push(arr2.unshift());
        }
        else if (arr2.length < 0 && arr1){
            newArr.push(arr1.unshift());
        }
        else {
            if (arr1[0] > arr2[0]){
                newArr.push(arr2.unshift());
            }
            else {
                newArr.push(arr1.unshift());
            }
        }
    }
    console.log(newArr);
    return newArr;
}

function mergeSort(arr1, arr2){
    
}