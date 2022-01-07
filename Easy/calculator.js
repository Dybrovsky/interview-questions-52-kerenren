/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(firstNum, operator, secondNum) {

  //your code
  switch (operator) {
  case '+':
    return(firstNum + secondNum)
  case '*':
    return(firstNum * secondNum)
  case '/':
    if(secondNum == 0){
      return "Can't divide by 0!"
    }
    return(firstNum / secondNum)
    case '-':
      return(firstNum - secondNum)
}
}

calculator(4, "/", 2)

exports.solution = calculator;