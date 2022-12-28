function repeatStringNumTimes(str, num) {
  if (num <= 0) return ""
  let strTwo = str
  for (let i = 1; i < num; i++) {
    str += strTwo;
  }
  return str;  // write your code here
}

console.log(repeatStringNumTimes("abc", 5))
module.exports = repeatStringNumTimes
