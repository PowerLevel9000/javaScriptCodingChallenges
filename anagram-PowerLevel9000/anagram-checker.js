module.exports = function (str1, str2) {
  str1 = str1.toLowerCase().replace(/[^0-9a-z]/gi, '').split("").sort().join("");
  str2 = str2.toLowerCase().replace(/[^0-9a-z]/gi, '').split("").sort().join("");
  if (str1 === str2) return true;
  return false;// write your code here
};
