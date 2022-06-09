function groupAnagrams(strs) {
    let grouped = {};
    for (let i = 0; i < strs.length; i++) {
        const element = strs[i];
        const key = element.split("").sort().join("");

        if(!grouped[key]){
            grouped[key] = [];
        }

        grouped[key].push(element);
    }
    return Object.values(grouped);
}

module.exports = groupAnagrams;
