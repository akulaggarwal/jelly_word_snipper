const originalStr = 'What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.'
const sampleSnip = 'What I highly recommended is creating hobbies together and exploring new things together.'

//Changeable paramaters (the knobs):
const idealLen = 100;
const maxLen = 200;
const minLen = 80;
const punctuations = ['.', '!', ';', '?', ',', ')', '-', , ':'];

function findPunctuation(regex, inputStr) {
  const rightStr = inputStr.slice(99, 200);
  const leftStr = inputStr.slice(79, 99).split('').reverse().join('');

  let startIndex = 0;
  let rightIndeces = null;
  if (rightStr.match(regex)) {
    rightIndeces = rightStr.match(regex).map((punct) => {
      startIndex = rightStr.indexOf(punct, startIndex ? startIndex + 1: 0);
      return startIndex;
    });
  }

  startIndex = 0;
  let leftIndeces = null;
  if (leftStr.match(regex)) {
    leftIndeces = leftStr.match(regex).map((punct) => {
      startIndex = leftStr.indexOf(punct, startIndex ? startIndex + 1: 0);
      return startIndex;
    });
  }

  if (leftIndeces && rightIndeces) {
    if (leftIndeces[0] <= rightIndeces[0]) {
      return 100 - leftIndeces[0];
    } else {
      return rightIndeces[0] + 100;
    }
  } else if (leftIndeces || rightIndeces){
    return leftIndeces ? 100 - leftIndeces[0] : rightIndeces[0] + 100;
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
    const regex = new RegExp(`[${val}]`);
    snipLocation = findPunctuation(regex, inputStr);

    if (snipLocation) {
      break;
    }
  }

  //Edge-case: If somehow didn't match any expected inputs:
  if (!snipLocation) {
    return {full: inputStr}
  }

  const snippet = inputStr.slice(0, snipLocation);
  const remaining = inputStr.slice(snipLocation);

  return {snippet, remaining}
}

const snipped = makeSnip(originalStr);
console.log(snipped);
