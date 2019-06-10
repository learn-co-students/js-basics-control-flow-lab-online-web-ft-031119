function scuberGreetingForFeet(height){
  let response = '';
  if (height <= 400) {
    response = 'This one is on me!';
  } else if (height > 2000 && height <= 2500) {
    response = 'I will gladly take your thirty bucks.';
  } else if (height > 2500) {
    response = 'No can do.';
  }
  return response;
}

function ternaryCheckCity(city){
  // Write your code here!
  let response = '';
  city === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';
  return response;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response = '';
  if (tip === 'generous' ) {
    response = 'Thank you so much.';
  } else if (tip === 'not as generous') {
    response = 'Thank you.';
  } else {
    response = 'Bye.';
  }
  return response;
}
