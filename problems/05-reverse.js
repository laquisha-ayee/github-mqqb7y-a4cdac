/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverseString(str) {
  if (str === "") {
      return "";
  }
  return reverseString(str.substring(1)) + str[0];
}
 console.log 

 
console.log(reverseString("house")); // "esuoh"
console.log(reverseString("dog")); // "god"
console.log(reverseString("atom")); // "mota"
console.log(reverseString("q")); // "q"
console.log(reverseString("id")); // "di"
console.log(reverseString("")); // ""console.log(
/*****String*********DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
