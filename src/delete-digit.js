const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = `${n}`;

  const numVariants = [];
  for (let i = 0; i < str.length; ++i) {
    let numVariant;
    let numVariantStart = str.slice(0, i);
    let numVariantEnd = str.slice(i + 1);
    numVariant = `${numVariantStart}${numVariantEnd}`
    numVariants.push(numVariant);
  }
  let maxNum = +numVariants[0];
  numVariants.forEach((item) => {
    if (+item > maxNum) {
      maxNum = +item
    }
  })
  console.log(numVariants)
  return maxNum;
}

module.exports = {
  deleteDigit
};
