describe('Bubble Sort', function(){
    beforeAll(function () {
      spyOn(window, 'swap').and.callThrough();
    });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles example array in slide', function(){
        expect( bubbleSort([6,5,3,1,8,7,2,4]) ).toEqual( [1,2,3,4,5,6,7,8] );
      });
    it('expects 36 calls', function() {
      // window.swap();
      console.log(window.swap.calls.count());
      expect(window.swap.calls.count()).toEqual(36);
    })
  });