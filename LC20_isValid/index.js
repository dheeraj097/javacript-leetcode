const isValid = s => {
    let stack = [];
    let parenthesesObj = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    }

    for (let i = 0; i < s.length; i++) {
        const element = s[i];

        if(parenthesesObj[element]){
            stack.push(element)
        }else if(parenthesesObj[stack.pop()] !== element){
            return false;
        }
    }
    return stack.length === 0;
};

module.exports = isValid;
