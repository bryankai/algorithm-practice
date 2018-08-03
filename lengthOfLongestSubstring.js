// Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var str = '';
    var i = 0;
    var cache = [];

    while (i < s.length) {
        if (cache[s[i]]) {
            // Found a repeating character.
            if (str.length > max) {
                max = str.length;
            }

            // Optimal: strip everything up to the first repeating character in our substring, and continue on.
            var start = str.indexOf(s[i]);
            str = str.substring(start + 1);
        }

        if (i < s.length) {
            str += s[i];
            // Map: for each letter, keep track of latest instance of the letter
            cache[s[i]] = i + 1;
            i++;
        }
    }

    if (str.length > max) {
        max = str.length;
    }

    return max;
};
lengthOfLongestSubstring('dvdf')
