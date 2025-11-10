const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainPositions: [],

  getLength() {
    return this.chainPositions.length;
  },

  addLink(value) {
    this.chainPositions.push(`${value}`);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.chainPositions.length) {
      this.chainPositions.splice(position - 1, 1);
      return this;
    } else {
      this.chainPositions = [];
      throw new Error(`You can't remove incorrect link!`);
    }

  },

  reverseChain() {
    this.chainPositions.reverse();
    return this;
  },

  finishChain() {
    let chain = this.chainPositions.join(' )~~( ');
    chain = `( ${chain} )`;
    this.chainPositions = [];
    return chain;
  }
};

module.exports = {
  chainMaker,
};
