// 6. Write a function that calculates the sum of the ordered elements that are divisible by a specified number in the array.
// Input: (array, number)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7], 2) => 12
// Ex: ([1, 2, 3, 4, 5, 6, 7], 3) => 9

function sumDivisible(array, number) {
  let sum = 0;
  array.forEach(a => {
    if (a % number == 0) {
      sum += a;
    }
  })
  return sum;
}
