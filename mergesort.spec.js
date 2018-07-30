describe('Split Array function', function() {
    let sampleArr;
    beforeEach(function(){
        sampleArr = [6,5,3,1,7,2,4];
    });
    it('is able to split an array into two halves', function() {
      // your code here
      expect(split(sampleArr)).toEqual([[6,5,3,1], [7,2,4]]); 
    });
  });

// describe('Merge function', function(){
//     it('is able to merge two sorted arrays into one sorted array', function(){
//       // test the merging algorithm
//     });
//   });

describe('Merge Array function', function() {
  let sampleArr1;
  let sampleArr2
  beforeEach(function() {
    sampleArr1 = [3,5,6];
    sampleArr2 = [1,2,4,7];
  });
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge(sampleArr1, sampleArr2)).toEqual([1,2,3,4,5,6,7]);
  });
});

