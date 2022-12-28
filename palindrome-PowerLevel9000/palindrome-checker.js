module.exports = function (str) {
  let strRev = str.split("").reverse().join("");
  str = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
  strRev = strRev.toLowerCase().replace(/[^0-9a-z]/gi, '');
  if (str === strRev) return true;
  return false;// write your code here
};
