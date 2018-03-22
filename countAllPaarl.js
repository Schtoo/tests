var countAllPaarl = function(regNumbers){
  var paarl = regNumbers.split(", ");
  var town = [];
  //console.log(paarl);
  for(var i=0;i<paarl.length;i++){
    if(paarl[i].startsWith("CJ")){
      town.push(paarl[i]);
    }
  }return town.length;
};
