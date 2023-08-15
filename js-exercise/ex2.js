// 2. Write a JavaScript function to count the occurrence of a substring in a string.
// Input: (string, substring)
// Output: the occurrence of a substring in a string
// Ex: ("The quick brown fox jumps over the lazy dog", 'the') => 2
// Ex: ("The quick brown fox jumps over the lazy dog", 'fox') => 1

/**
 * Returns times subString appeared in the string.
 *
 * @param {string} str The string input.
 * @param {string} subStr The subString.
 * @return {number} Times subStr appeared in str.
 */

function countOccurence(str, subStr) {
  let rgxp = new RegExp(subStr.toLowerCase(), "gi");
  let result = str.toLowerCase().match(rgxp);
  return result.length;
}
