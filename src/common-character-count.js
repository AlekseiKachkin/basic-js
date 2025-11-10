const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let countChar = 0;
  let pattern = s1;
  let compare = s2;
  for (let i = 0; i < pattern.length; ++i) {
    if (compare.includes(pattern[i])) {
      countChar++;
      let index = compare.indexOf(pattern[i]);
      let compareStart = compare.slice(0, index);
      let compareEnd = compare.slice(index + 1);
      compare = `${compareStart}${compareEnd}`
    }
  }
  return countChar
}

module.exports = {
  getCommonCharacterCount
};
