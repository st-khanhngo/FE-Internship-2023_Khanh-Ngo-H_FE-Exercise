// 4. Write a function to get a unique random array number in the specified range.
// Input: (array length, min, max)
// Output: new array
// Ex: (4, 1, 10) => [3, 6, 1, 9]

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
