/*
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Examples
convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

function convert(inputHours, inputMinutes) {
  let hours = inputHours * 3600;
  let minutes = inputMinutes * 60;
  let result = hours + minutes;
  return(result)

  //your code

}

console.log("🚀 ~ file: convert.js ~ line 26 ~ convert", convert(2,0))
// convert(1, 3)

exports.solution = convert;
