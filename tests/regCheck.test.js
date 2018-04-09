describe('regCheck', function(){
    it('should show you Gauteng number plate and reg number', function(){
        assert.deepEqual(regCheck('DV 23 NB GP','GP',), true)
    });
    it('should give you Mpumalanga registration number', function(){
      assert.deepEqual(regCheck('DV 23 LP MP', 'MP'), true)
    });
    it('should give you Limpopo registration number', function(){
      assert.deepEqual(regCheck('189-012 L', 'L'), true)
    });
    it('should show you a reg number from Eastern Cape', function(){
      assert.deepEqual(regCheck('189-012 EC', 'EC'), true)
    });
});
