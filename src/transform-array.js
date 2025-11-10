const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  try {
    let check = arr.some((item) => item);
    let arr2 = [];
    doTransform(arr);
    function doTransform(arr) {
      const instructions = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

      for (let i = 0; i < arr.length; ++i) {
        if (instructions.includes(arr[i])) {
          switch (arr[i]) {
            case instructions[0]:
              ++i;
              break;
            case instructions[1]:
              if (i > 0 && arr[i - 2] !== instructions[0]) {
                arr2.pop();
              }
              break;
            case instructions[2]:
              if (i + 1 < arr.length) {
                arr2.push(arr[i + 1])
              }
              break;
            case instructions[3]:
              if (i > 0 && arr2.includes(arr[i - 1])) {
                arr2.push(arr[i - 1]);
              }
              break;
          }
        } else {
          arr2.push(arr[i]);
        }

      }
    }
    return arr2;
  } catch (error) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
