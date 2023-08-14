// 1. Write a JavaScript function to repeat a string a specified times.
// Input: (string, repeat times)
// Output: the new string
// Ex: ("FE", 4) => 'FEFEFEFE'

/**
 * Returns s repeated n times.
 *
 * @param {string} str The initial string.
 * @param {number} n The times, must be a natural number.
 * @return {string} str repeated n times.
 */

function repeatString(str, n) {
  return str.repeat(n);
}
