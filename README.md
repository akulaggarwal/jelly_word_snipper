# jelly_word_snipper

Complete solution found in file closestLength.js
 - Uses loop to look at first punctuation encountered on either side of idealLen index
 - Accounts for multiple edge cases
 - Constant time solution, as it's limited by maxLen parameter
 - If maxLen paramater (or maxLen - idealLen parameter) considered to be n in O(n), then can be considered to be linear time solution, for worst case scenario

Alternate solution found in file regex.js
- Somewhat contrived due to line 12, which reverses the string
- Time complexity is still linear, though this solution doesn't stop if first closest punctuation found

Another way to find the trimming points: inputStr.split('.'), then count length of each sentence to get close to idealLen
- Has added benefit of finding further split points, if want to feed answer bit by bit on user hitting "continue"
- Would be linear time complexity, where n in O(n) is inputStr.length
