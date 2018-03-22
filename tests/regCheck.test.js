describe('regCheck', function(){
    it('should show you Gauteng, Mpumalanga, Limpopo & Eastern Cape number plates and reg numbers', function(){
        assert.equal(true,  regCheck('DV 23 NB GP', 'GP', 'DV 23 LP MP', 'MP', '189-012 L', 'L', '189-012 EC', 'EC'))

    });
    it('should show you Gauteng, Mpumalanga, Limpopo & Eastern Cape number plates and reg numbers', function(){
      assert.equal(false,  regCheck('DV 23 NB GP', 'CA', 'DV 23 LP MP', 'CY', '189-012 L', 'CZ', '189-012 EC', 'CJ'))
    });
});
