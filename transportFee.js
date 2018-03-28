var transportFee = function(shifts){
  switch(shifts){
    case "morning":
      return "R20";
      break;
    case "afternoon":
      return "R10";
      break;
    case "night":
      return "free";
      break;
    default:
      return "free";
      }
};
