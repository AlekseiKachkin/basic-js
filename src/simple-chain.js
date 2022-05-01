const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainLength: 0,
  chain: '',  
  chainPoints: {

  },
  
  getLength ()  {
    return this.chainLength;  
  },

  addLink (value) {    
      if (this.chainLength > 0) {
        this.chain = `${this.chain}~~( ${value} )`;
        this.chainLength++;
      } else {
        this.chain = `( ${value} )`;
        this.chainLength++;
      }
      return this;
  },

  removeLink (position) {
    let start = 0,
        startPosition,
        end = 0,
        endPosition;
    for(let i = 0; i < this.chain.length; ++i) {
      if (this.chain[i] === '(') {
        start++;
        startPosition = i;
      }
      if (this.chain[i] === ')') {
        end++;
        endPosition = i;
      }
      if (end === position){
        break;
      }
    }
    let chainStart = this.chain.slice(0, startPosition);
    let chainEnd = this.chain.slice(endPosition+1);
    this.chain = `${chainStart}${chainEnd}`; 
    this.chainLength--;
    return this;   
  },

  reverseChain () {
    this.chain.split('').reverse().join('');
    return this
  },
  
  finishChain () {
    return this.chain;
  }
};


console.log(chainMaker);

module.exports = {
  chainMaker
};
