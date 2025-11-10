const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
const renameFiles = (names) => {
  const result = [];
  const listNames = new Map();
  names.forEach((item) => {
    if (listNames.has(item)) {
      result.push(`${item}(${listNames.get(item)})`)
      listNames.set(item, listNames.get(item) + 1)
    } else {
      if (result.includes(item)) {
        result.push(`${item}(1)`)
      } else {
        result.push(item);
        listNames.set(item, 1)
      }

    }
  })
  return result
}


module.exports = {
  renameFiles
};
