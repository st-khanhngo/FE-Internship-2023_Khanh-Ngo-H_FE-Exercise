// 4. Write a function to get a unique random array number in the specified range.
// Input: (array length, min, max)
// Output: new array
// Ex: (4, 1, 10) => [3, 6, 1, 9]

/**
 * Returns an array with the unique random numbers in the specified range.
 *
 * @param {number} length The array range.
 * @param {number} min The minimum limitation in the random range.
 * @param {number} max The maximum limitation in the random range.
 * @return {array} the array contains unique random numbers in range.
 */

function random(length, min, max) {
  let arr = [], i = 0;
  while (i < length) {
    let a = Math.floor(Math.random() * max + min);
    if (!arr.includes(a)) {
      arr.push(a);
      i++;
    }
  }
  return arr;
}
