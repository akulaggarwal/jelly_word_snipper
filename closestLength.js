const originalStr = 'What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.'
const sampleSnip = 'What I highly recommended is creating hobbies together and exploring new things together.'

console.log(sampleSnip.length);

//Changeable paramaters (the knobs):
const idealLen = 100;
const maxLen = 200;
const minLen = 80;
const punctuations = ['.', '!', ';', '?', ',', ')', '-', , ':'];

function findPunctuation(punctuation, inputStr) {
  const punctuationLocations = [];
  for (let i = 0; i < 100; i++) {
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

  //handle case for smaller than minimum input
  if (inputStr.length < minLen){
    return inputStr
  }

  let snipLocation = null;
  for (let val of punctuations) {
    snipLocation = findPunctuation(val, inputStr);

    if (snipLocation) {
      break;
    }
  }

  //In case there's somehow no punctuation at all! ...
  if (!snipLocation) {
    findPunctuation(' ', inputStr);
  }

  const snippet = inputStr.slice(0, snipLocation + 1);
  const remaining = inputStr.slice(snipLocation + 2);
  console.log({snippet, remaining});
  return {snippet, remaining}
}

makeSnip(originalStr)
