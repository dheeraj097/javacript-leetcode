// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let start = 0;
    let charPosition = {};
    let maxSubstringLength = 0;

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i];

        // console.log("here1", endChar);

        if(charPosition[endChar] >= start){

            // console.log("here2",charPosition[endChar], start);

            start = charPosition[endChar] + 1;

            // console.log("here3",start);
        }

        charPosition[endChar] = i;

        // console.log("here4",charPosition[endChar], i);

        maxSubstringLength = Math.max(maxSubstringLength, i-start+1);

        // console.log("here5",charPosition)
    }

    return maxSubstringLength;

}

// lengthOfLongestSubstring("abcabcbb");

module.exports = lengthOfLongestSubstring;
