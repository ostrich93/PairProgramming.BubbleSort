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