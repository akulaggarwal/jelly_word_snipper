# jelly_word_snipper

Note: maxLen, minLen, and idealLen are defined in the .js files

Complete solution found in file closestLength.js
 - Uses loop to look at first punctuation encountered on either side of idealLen index
 - Accounts for multiple edge cases
 - Constant time solution, as it's limited by maxLen parameter
 - If maxLen paramater (or maxLen - idealLen parameter) considered to be n in O(n), then can be considered to be linear time solution, for worst case scenario

Alternate solution found in file regex.js
- Somewhat contrived due to line 12, which reverses the string
- Time complexity is same as essentially same as above.

Another way to find the trimming points: inputStr.split('.'), then count length of each sentence to get close to idealLen
- Has added benefit of finding further split points, if want to feed answer bit by bit on user hitting "continue"
- Would be linear time complexity, where n in O(n) is inputStr.length



Possible further work:
- Add weights to certain parameters. For example, can create a changeable weight which can be multiplied by how far the punctuation is from idealLen. Can create another weight which can be multiplied by number of sentences, representing amount of information in initial snippet. Changing of weights means changing of priorities for output. Do we prefer the output to have more information? Or be closer to target length? Or perhaps even something else entirely? Can also have weights be exponents multiplied by the same numbers, or part of polynomial equation.
- If wanted to find additional break points, and make them as an aggregate close to the ideal length, an algorithm can be written which would compute different combinations of lengths for each snip. The distance from idealLen for each could be computed and summed for each run through, and the smallest sum returned. This would be optimized using dynamic programming.
