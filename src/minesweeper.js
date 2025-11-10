const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const minesweeper = (matrix) => {
  const result = []

  for (let y = 0; y < matrix.length; y++) {
    result[y] = []
    for (let x = 0; x < matrix[y].length; x++) {
      let positions = [
        [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
        [x - 1, y], [x + 1, y],
        [x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
      ]
      let number = 0;
      positions.forEach((item) => {
        if (item[0] >= 0 &&
          item[1] >= 0 &&
          item[0] < matrix[0].length &&
          item[1] < matrix.length
        ) {
          if (matrix[item[1]][item[0]]) {
            number += 1;
          }
        }
      })
      result[y][x] = number
    }

  }
  return result
}

module.exports = {
  minesweeper
};
