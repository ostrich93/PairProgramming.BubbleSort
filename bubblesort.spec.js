describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles example array in slide', function(){
        expect( bubbleSort([6,5,3,1,8,7,2,4]) ).toEqual( [1,2,3,4,5,6,7,8] );
      });
  });