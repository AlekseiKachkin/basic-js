const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let separator,
    repeatTimes,
    addition,
    additionRepeatTimes

  if (options.repeatTimes) {
    repeatTimes = +options.repeatTimes
  } else {
    repeatTimes = 1;
  }

  if (options.separator) {
    separator = `${options.separator}`;
  } else {
    separator = '+';
  }

  if (options.addition || options.addition === false || options.addition === null) {
    addition = `${options.addition}`;
  } else {
    addition = ``;
  }

  if (options.additionRepeatTimes) {
    additionRepeatTimes = +options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }

  if (options.additionSeparator) {
    let additionSeparator = options.additionSeparator
    addition = addition.concat(additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  } else {
    let additionSeparator = '|';
    addition = addition.concat(additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  }


  let result = `${str}${addition}`
  let strPattern = `${str}${addition}`
  for (let i = 0; i < repeatTimes - 1; ++i) {
    result = `${result}${separator}${strPattern}`
  }
  return result

}

module.exports = {
  repeater
};
