function isAnagram(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let sCharCount = {};

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        sCharCount[element] = sCharCount[element] + 1 || 1;
    }

    for (let i = 0; i < t.length; i++) {
        const element = t[i];

        if(!sCharCount[element]){
            return false;
        }else{
            sCharCount[element]--;
        }
    }
    return true;
}

module.exports = isAnagram;
