/**
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    for(let i = 0, j = s.length - 1; i < Math.floor(s.length/2);i++,j--){
        [s[i],s[j]] = [s[j],s[i]];
    }
};