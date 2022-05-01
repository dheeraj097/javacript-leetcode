function isPalindrome(s) {
    //santiize the string
    s = s.toLowerCase().replace(/[\W_]/g, "");
    // ref: https://stackoverflow.com/questions/388996/regex-for-javascript-to-allow-only-alphanumeric

    // set left to start of string and right to end of string
    let left = 0;
    let right = s.length - 1;

    // loop
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

module.exports = isPalindrome;
