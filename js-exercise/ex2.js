// 2. Write a JavaScript function to count the occurrence of a substring in a string.
// Input: (string, substring)
// Output: the occurrence of a substring in a string
// Ex: ("The quick brown fox jumps over the lazy dog", 'the') => 2
// Ex: ("The quick brown fox jumps over the lazy dog", 'fox') => 1

function count(string, substring) {
  substring = substring.toLowerCase();
  let count = 0;
  let s = string.toLowerCase().split(' ');
  s.forEach(word => {
    if (substring === word) {
      count++;
    }
  });
  return count;
}
