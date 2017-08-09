const _ = {};

 _.first = (arr) =>{
     if (typeof arr === 'string') return arr[0];
    return arr.shift();
}

if (typeof module !== 'undefined') {
  module.exports = _;
}