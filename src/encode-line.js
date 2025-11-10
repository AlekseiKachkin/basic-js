const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = ``;
  if (str.length) {

    let char = `${str[0]}`;
    let charCount = 1;
    for (let i = 1; i < str.length; ++i) {
      if (char === str[i]) {
        charCount++;
      } else {
        if (charCount > 1) {
          result = `${result}${charCount}${char}`
        } else {
          result = `${result}${char}`
        }
        char = str[i];
        charCount = 1
      }
    }
    if (charCount > 1) {
      result = `${result}${charCount}${char}`
    } else {
      result = `${result}${char}`
    }

  }
  return result;
}

module.exports = {
  encodeLine
};
