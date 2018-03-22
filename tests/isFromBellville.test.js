describe('isFromBellville', function(){
    it('should give you a Bellville number plate', function(){
        assert.equal(true, isFromBellville ('CY 564-987'))
    });
    it('should give false if not from Bellville', function(){
      assert.equal(isFromBellville('CA 898-876'), false)
    });
});
