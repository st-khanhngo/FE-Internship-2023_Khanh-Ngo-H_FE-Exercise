// 3. Write a JavaScript function to truncate a string to a certain number of words.
// Input: (string, number)
// Output: new string
// Ex: ('The quick brown fox jumps over the lazy dog', 4) => "The quick brown fox"

/**
 * Returns a string truncated to a certain number of words.
 * 
 * @param {string} str The string input.
 * @param {number} n The number of words.
 * @return {string} the string truncated to a certain number of words.
 */

function truncateString(str, n) {
  let s = str.split(' ').slice(0, n);
  return s.join(' ');
}
