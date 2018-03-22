describe('countRegNumber', function(){
    it('should show you a count of how many reg numbers there is', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'))
    });
    it('should show you a count of how many reg numbers there is', function(){
      assert.equal(5, countRegNumber('CZ 897-536, CA 123-987, 342-983 L, 987-456 GP, CY 4643-39'))
    });
});
