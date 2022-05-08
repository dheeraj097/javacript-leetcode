//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
    let start = 0;
    let maxLenght = 1;

    function expandAroundMiddle(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            const currentPalLength = right-left+1;
            if(currentPalLength > maxLenght){
                maxLenght = currentPalLength;
                start = left;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i-1, i+1);
        expandAroundMiddle(i, i+1);
    }

    return s.slice(start, start + maxLenght);
}

module.exports = longestPalindrome;
