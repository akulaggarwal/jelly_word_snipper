const originalStr = 'What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.'
const sampleSnip = 'What I highly recommended is creating hobbies together and exploring new things together.'

//Changeable paramaters (the knobs):
const idealLen = 100;
const maxLen = 200;
const minLen = 80;
const punctuations = ['.', '!', ';', '?', ',', ')', '-', , ':'];

function findPunctuation(punctuation, inputStr) {
  const punctuationLocations = [];

  for (let i = 0; i < (maxLen - idealLen); i++) {
    const offset = idealLen - 1;
    const strForwards = inputStr[offset + i];
    const strBackwards = inputStr[offset - i];

    if (strForwards === punctuation) {
      punctuationLocations.push(offset + i);
    }
    if (strBackwards === punctuation && i <= idealLen - minLen && i) {
      punctuationLocations.push(offset - i);
    }

    if (punctuationLocations.length) {
      break;
    }
  }

  if (punctuationLocations.length) {
    return punctuationLocations[0];
  }

  return null;
}

function makeSnip(inputStr) {
  //Edge-case: handle case for smaller than minimum input
  if (inputStr.length < minLen){
    return {snippet: inputStr}
  }

  let snipLocation = null;
  for (let val of punctuations) {
    snipLocation = findPunctuation(val, inputStr);

    if (snipLocation) {
      break;
    }
  }

  //Edge-case: In case there's somehow no punctuation at all! ...
  snipLocation = snipLocation ? snipLocation: findPunctuation(' ', inputStr);

  const snippet = inputStr.slice(0, snipLocation + 1);
  const remaining = inputStr.slice(snipLocation + 2);

  return {snippet, remaining}
}

const snipped = makeSnip(originalStr);
console.log(snipped);
