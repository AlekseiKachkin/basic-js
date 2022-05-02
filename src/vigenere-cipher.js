const { NotImplementedError } = require('../extensions/index.js');

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
  
  encrypt (text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    } 
  }
  
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
   
  } 
  
}

const example = new VigenereCipheringMachine();
console.log(example.encrypt('attack at dawn!', 'alphonse'))

module.exports = {
  VigenereCipheringMachine
};
