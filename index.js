function scuberGreetingForFeet(distance){
  let response
  switch(true){
    case distance <= 400:
      response = 'This one is on me!';
      break;
    case distance > 2500:
      response = 'No can do.'
      break;
    case  distance >= 2000 :
      response = 'I will gladly take your thirty bucks.'
      break;
  }
  return response
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  let response
  switch (tip) {
    case "generous":
      response = "Thank you so much."
      break;
    case "not as generous":
      response = "Thank you."
      break;
    default:
      response = "Bye."
  }
  return response
}
