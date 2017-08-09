const _ = {};

_.first = (arr) => {

    if (typeof arr === 'string' || Array.isArray(arr)) return arr[0];
    else return [];
};

if (typeof module !== 'undefined') {
    module.exports = _;
}