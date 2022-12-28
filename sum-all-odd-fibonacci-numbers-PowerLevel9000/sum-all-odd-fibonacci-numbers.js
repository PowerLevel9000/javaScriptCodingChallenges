function sum(num) {
  let firstNum, secondNum = 1, sum = 0;
  for (firstNum = 1; firstNum <= num; firstNum = [secondNum, secondNum += firstNum][0]) if (firstNum % 2 !== 0) sum += firstNum
  return sum   // write your code here
}
module.exports = sum