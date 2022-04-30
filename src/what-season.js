const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  console.log(date);
  let result = true;
  if (date === false || date === undefined || date === null || date === '') {
    return 'Unable to determine the time of year!';
  }  

  try {
    let month = date.getTime();

  } catch {
    throw new Error("Invalid date!");
  }

  
            
      let month = date.getMonth();  
      switch (month) {
        case 11:
        case 0:
        case 1:
          result = 'winter';
          break;
        case 2:
        case 3:
        case 4:
          result = 'spring';
          break;      
        case 5:
        case 6:
        case 7:
          result = 'summer';
          break;
        case 8:
        case 9:
        case 10:
          result = 'autumn';
          break;
        
        }      
     return result;
   
}  
const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
let we = new Date(1456, 0, 2, 1, 50, 9, 238)
console.log('fakeDate');
console.log(fakeDate instanceof  Date);
console.log( toString.call(we));



module.exports = {
  getSeason
};
