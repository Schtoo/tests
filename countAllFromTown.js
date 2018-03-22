var countAllFromTown = function(regNumbers, location){
  var places = regNumbers.split(",");
  var travel = [];

  for(var i=0;i<places.length;i++){
    travel.push(places[i].trim());
  }
  var town = [];
  for(var i=0;i<travel.length;i++){
    if(travel[i].startsWith(location)){
       town.push(travel[i]);
    }
  } return town;
};
