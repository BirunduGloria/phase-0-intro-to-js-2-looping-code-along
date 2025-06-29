// Code your solutions in this file
// Function 1: writeCards
function writeCards(names, eventName) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return messages;
}

// Function 2: countDown
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
