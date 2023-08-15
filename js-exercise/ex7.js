// 7. Write a function to find the maximum sum of 2 consecutive elements in the array.
// Input: (array)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7]) => 13
// Ex: ([1, 2, 3, 7, 5, 6, 4]) => 12

/**
 * Returns the maximum sum of 2 consecutive elements in the array.
 *
 * @param {array} arr The array input.
 * @return {number} Maximum sum of 2 consecutive elements in the array.
 */

function maxSum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    max = Math.max(arr[i] + arr[j], max)
  }
  return max;
}
