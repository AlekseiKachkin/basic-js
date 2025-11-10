const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  vigenereStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(direct = true) {
    this.direct = direct;
  }

  getEncryptChar(letter, cipherChar) {
    if (!this.vigenereStr.includes(letter)) {
      return letter;
    }
    const row = cipherChar.charCodeAt(0) - 65;
    const col = letter.charCodeAt(0) - 65;
    const position = (row + col) % 26;
    return this.vigenereStr[position];
  }

  getDecryptChar(letter, cipherChar) {
    if (!this.vigenereStr.includes(letter)) {
      return letter;
    }
    const row = cipherChar.charCodeAt(0) - 65;
    const col = letter.charCodeAt(0) - 65;
    const position = (26 + col - row) % 26;
    return this.vigenereStr[position];
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    let countShiftBack = 0;
    const keyStr = key
      .toUpperCase()
      .repeat(Math.ceil(text.length / key.length))
      .slice(0, text.length);
    const result = text
      .toUpperCase()
      .split('')
      .map((letter, index) => {
        let result = this.getEncryptChar(letter, keyStr[index - countShiftBack])
        if (result === ' ') {
          countShiftBack += 1;
        }
        return result
      })
      .join('');

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    let countShiftBack = 0;
    const keyStr = key
      .toUpperCase()
      .repeat(Math.ceil(text.length / key.length))
      .slice(0, text.length);
    const result = text
      .toUpperCase()
      .split('')
      .map((letter, index) => {
        let result = this.getDecryptChar(letter, keyStr[index - countShiftBack])
        if (result === ' ') {
          countShiftBack += 1;
        }
        return result
      })
      .join('');

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
