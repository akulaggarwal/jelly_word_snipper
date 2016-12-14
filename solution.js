const originalStr = 'What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.'

const sampleSnip = 'What I highly recommended is creating hobbies together and exploring new things together.'

console.log(sampleSnip.length);
console.log(Number.MAX_SAFE_INTEGER);


//weights:
const maxLen = 200;
const minLen = 80;
const idealLen = 100;
const distanceWieght = .2;
const maxInfoWeight = .8;
const returnFullStr = false;

//following value returned should be as low as possible
function distance(current) {
  if (current < min || current > max) {
    return Number.MAX_SAFE_INTEGER
  }

  return distanceWieght * Math.absolute(ideal - current)
}

function punctuation() {

}

function makeSnip(inputStr) {
  //handle case for smaller than minimum input
  if (inputStr.length < minLen){
    return inputStr
  }

  //in case willing to return full string if under maxLength
  if (inputStr.length < 200 && returnFullStr) {
    return inputStr;
  }

  const periodExists = //use regex or something to find the location of first period

  if (periodExists) {

  }

}

makeSnip(originalStr)
