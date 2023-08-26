function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        if (charIndexMap.hasOwnProperty(s[end]) && charIndexMap[s[end]] >= start) {
            start = charIndexMap[s[end]] + 1;
        }
        charIndexMap[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

const input = "abcabcbb";
const result = lengthOfLongestSubstring(input);
console.log("Length of longest substring without repeating characters:", result);
