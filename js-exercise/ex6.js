// 6. Write a function that calculates the sum of the ordered elements that are divisible by a specified number in the array.
// Input: (array, number)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7], 2) => 12
// Ex: ([1, 2, 3, 4, 5, 6, 7], 3) => 9

/**
 * Returns the sum of the ordered elements that are divisible by n in arr.
 *
 * @param {array} arr The array input.
 * @param {number} n The divisor.
 * @return {number} Sum of the elements that are divisible by n in arr.
 */

function sumDivisible(arr, n) {
  let result = arr.reduce((sum, curr) => (curr % n === 0) ? sum + curr : sum, 0);
  return result
}
