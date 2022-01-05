function isPalindrome(word) {
  // Write your algorithm here
  let j = word.length;
  for (let i = 0; i < j/2; i++) {
    if (word[i] !== word[j - 1 - i]) {
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here
  function that receives string argument
    iterates over the string left to right and then right to left.
    if string is a palindrome, return true
*/

/*
  Add written explanation of your solution here
  add Variable that contains the length of the string - 1
  add a for loop where the variable i is declared
  if first and last string are the same, return true

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
