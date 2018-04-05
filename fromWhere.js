var fromWhere = function(regNumber){
  switch(regNumber){
    case "CY 132-345":
      return "Bellville"
      break;
    case "CJ 231-123":
      return "Paarl"
      break;
    case "CA 1233":
      return "Cape Town"
      break;
    default:
      return "Some other place!";
                  }
}
