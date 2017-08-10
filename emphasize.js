const _ = {};

_.first = (arr, n = 1) => {
    if (Array.isArray(arr) && n === 1 || typeof arr === 'string' && n === 1) return arr[0];
    if (typeof arr === 'string') arr = arr.split('');
    if (Array.isArray(arr) && n > -1) return arr.slice(0, n);
    else return [];
};

_.initial = (arr, n = 1) => {
    if (typeof arr === 'string') arr = arr.split('');
    if (Array.isArray(arr)) return arr.slice(0, -n);
    else return [];
};

_.keys = (obj) => {
    const result = [];
    if (typeof obj === 'object')
        for (let key in obj) {
            result.push(key);
        }
    return result;
};

_.values = (obj) => {
    if (Array.isArray(obj)) return obj;
    const result = [];
    if (typeof obj === 'object')
        for (let key in obj) {
            result.push(obj[key]);
        }
    return result;
};

_.each = (list, iteratee) => {
    if (typeof (list) === 'number') return list;
    if (Array.isArray(list) || typeof list === 'string') {
        for (let i = 0; i < list.length; i++) {
            iteratee(list[i]);
        }
    } else if (typeof list === 'object') {
        for (let key in list) {
            iteratee(list[key]);
        }
    }
    return list;
};

_.map = (list, iteratee) => {
    const result = [];
    if (Array.isArray(list) || typeof list === 'string') {
        for (let i = 0; i < list.length; i++) {
            result.push(iteratee(list[i]));
        }
    } else if (typeof list === 'object') {
        for (let key in list) {
            result.push(iteratee(list[key]));
        }
    }
    return result;
};

_.reduce = (list, iteratee, context) => {
    if (context !== '') context = context || 0;
    if (Array.isArray(list) || typeof list === 'string') {
        for (let i = 0; i < list.length; i++) {
            context = iteratee(context, list[i]);
        }
        return context;
    } else if (typeof list === 'object') {
        for (let key in list) {
            context = iteratee(context, list[key]);
        }
        return context;
    }
};

_.flatten = (arr, shallow) => {
    const result = [];
    if (Array.isArray(arr)) {
        const resultAr = arr.reduce((acc, elem) => {
            if (Array.isArray(elem)) 
                return (shallow) ? acc.concat(elem) : acc.concat(_.flatten(elem));
            else acc.push(elem);
            return acc;
        }, []);
        return resultAr;
    }
    if (typeof arr === 'string') return arr.split('');
    return result;
};

_.identity = (input) => {
    return input;
};

_.toArray = (list) => {
  const result = [];
  if (Array.isArray(list)) return list;
  if (typeof list === 'object') {
    for (let key in list) {
      result.push(list[key]);
    }
  }
  if (typeof list === 'string') {
    for (let i = 0; i < list.length; i++) {
      result.push(list[i]);
    }
  }
  return result;
};

_.partition = (array, predicate) => {
  if (!Array.isArray(array)) {
    array = _.toArray(array);
  }
  if (!predicate) return [array, []];
  const firstArray = [];
  const secondArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) firstArray.push(array[i]);
    else {
      secondArray.push(array[i]);
    }
  }
  return [firstArray, secondArray];
};

_.random = () => {

};

if (typeof module !== 'undefined') {
    module.exports = _;
}