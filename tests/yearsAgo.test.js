describe('yearsAgo', function(){
    it('should show you the difference between 2 years', function(){
        assert.equal(42, yearsAgo('1976'))
    });
    it('should give you the difference between 2 years', function(){
      assert.equal(2018-1976, yearsAgo('1976'))
    });
});
