const _ = {};

_.first = (arr, n = 1) => {
    if (n === 1) {
        if (typeof arr === 'string' || Array.isArray(arr)) return arr[0];
        else return [];
    }
    else {
        if (Array.isArray(arr)) return arr.slice(0,n);
        if (typeof arr === 'string') return arr.split('').slice(0,n);
    }
};

if (typeof module !== 'undefined') {
    module.exports = _;
}