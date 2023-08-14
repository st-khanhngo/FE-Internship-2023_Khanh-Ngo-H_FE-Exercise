// 5. Write a function to generate a random hexa color code.
// Input: ()
// Output: string
// Ex: () => #1A7B9D

function randomHex() {
  let letters = "0123456789abcdef"
  let hexCode = "#"

  for (let i = 0; i < 6; i++) {
    hexCode += letters[Math.floor(Math.random() * 16)]
  }
  return hexCode
}
