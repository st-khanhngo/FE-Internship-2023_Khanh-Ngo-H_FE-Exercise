// 3. Write a JavaScript function to truncate a string to a certain number of words.
// Input: (string, number)
// Output: new string
// Ex: ('The quick brown fox jumps over the lazy dog', 4) => "The quick brown fox"

function truncate(string, number) {
  let s = string.split(' ').slice(0, number);
  return s.join(' ');
}
