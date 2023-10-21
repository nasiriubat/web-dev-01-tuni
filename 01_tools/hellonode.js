const _ = require("lodash");

function hithere(array) {
    const lastItem = _.last(array);
    const firstItem = _.head(array);
    const result = `${lastItem} and ${firstItem}`;
    return result;
  }
  
module.exports = hithere;
 