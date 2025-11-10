const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getDNSStats = (domains) => {
  const result = {};
  domains.forEach((item) => {
    let domain = item.split('.');
    let address = ''
    domain.reverse()
    domain.forEach((item) => {
      address = `${address}.${item}`
      if (!!Object.hasOwn(result, address)) {
        result[address] += 1;
      } else {
        result[address] = 1
      }
    })
  })
  return result
}

module.exports = {
  getDNSStats
};
