module.exports = function () {
  // write your code here
  let intArray = [];

  for (let i = 1; i < 101; i++) {
    intArray.push(i);
  }

  intArray = intArray.map((item) => {
    if (item % 3 === 0 && item % 5 === 0) {
      return "FizzBuzz";
    } else if (item % 5 === 0) {
      return "Buzz";
    } else if (item % 3 === 0) {
      return "Fizz";
    } else {
      return item;
    }
  });
  return intArray;

};
