// 7. Write a function to find the maximum sum of 2 consecutive elements in the array.
// Input: (array)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7]) => 13
// Ex: ([1, 2, 3, 7, 5, 6, 4]) => 12

function maxSum(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    if (array[i] + array[j] > max) {
      max = array[i] + array[j];
    }
  }
  return max;
}
