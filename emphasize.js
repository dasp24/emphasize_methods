const _ = {};

_.first = (arr, n = 1) => {
    if (n === 1) {
        if (typeof arr === 'string' || Array.isArray(arr)) return arr[0];
        else return [];
    } else {
        if (typeof arr === 'string') arr = arr.split('');
        if (Array.isArray(arr)) return arr.slice(0, n);
        else return [];
    }
};

_.initial = (arr, n = 1) => {
    if (typeof arr === 'string') arr = arr.split('');
    if (Array.isArray(arr)) return arr.slice(0, -n);
    else return [];
};

if (typeof module !== 'undefined') {
    module.exports = _;
}