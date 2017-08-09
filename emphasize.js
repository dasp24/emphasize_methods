const _ = {};

 _.first = (arr) =>{
    return arr.shift();
}

if (typeof module !== 'undefined') {
  module.exports = _;
}