describe('isFromBellville', function(){
    it('should give you a Bellville number plate', function(){
        assert.equal(isFromBellville ('CY 564-987, CF 432-656, L 245'), true)
    });
    it('should give you a false message if it is not fromBellville', function(){
      assert.equal(isFromBellville('CA 898-876, 2314-GP, MP 2233'), false)
    });
});
