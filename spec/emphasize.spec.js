const {
    expect
} = require('chai');
const path = require('path');
const _ = require(path.join(__dirname, '..', './emphasize.js'));

describe('_', () => {
    'use strict';
    it('is an object', () => {
        expect(_).to.be.an('object');
    });

    describe('_.first', () => {
        it('exists', () => {
            expect(_.first).to.be.a('function');
        });
        it('returns the first value of an array', () => {
            const arr = [1, 2, 3];
            expect(_.first(arr)).to.equal(1);
        });
        it('returns the first char of a string', () => {
            const str = 'hello';
            expect(_.first(str)).to.equal('h');
        });
        it('returns empty array if given object or number', () => {
            const num = 123;
            expect(_.first(num)).to.eql([]);
            const obj = {
                a: 1,
                b: 2
            };
            expect(_.first(obj)).to.eql([]);
        });
        it('returns the first n elements if given as a second param - arr', () => {
            const arr = [1, 2, 3];
            expect(_.first(arr, 2)).to.eql([1, 2]);
            const arr2 = [1, 2, 3, 4, 5];
            expect(_.first(arr2, 4)).to.eql([1, 2, 3, 4]);
        });
        it('returns the first n elements if given as a second param - str', () => {
            const str = 'holla';
            expect(_.first(str, 2)).to.eql(['h', 'o']);
        });
        it('works with some edge cases', () => {
            const str = 'holla';
            const arr = [1, 2, 3];
            const num = 123;
            const obj = {
                a: 1,
                b: 2
            };
            expect(_.first(str, 0)).to.eql([]);
            expect(_.first(arr, 0)).to.eql([]);
            const arr2 = [3, 7, 11, 99];
            expect(_.first(arr2, 5)).to.eql([3, 7, 11, 99]);
            expect(_.first(num, 2)).to.eql([]);
            expect(_.first(obj, 2)).to.eql([]);
            expect(_.first(arr, -2)).to.eql([]);

        });
    });

    describe('_.initial', () => {
        it('exists', () => {
            expect(_.initial).to.be.a('function');
        });
        it('returns arr without last elem - arr', () => {
            const arr = [1, 2, 3];
            expect(_.initial(arr)).to.eql([1, 2]);
        });
        it('returns arr without last elem - string', () => {
            const str = 'hello';
            expect(_.initial(str)).to.eql(['h', 'e', 'l', 'l']);
        });
        it('returns an empty arr if input is obj or num', () => {
            const num = 123;
            const obj = {
                a: 1,
                b: 2
            };
            expect(_.initial(num)).to.eql([]);
            expect(_.initial(obj)).to.eql([]);
        });
        it('returns an arr without last n elements', () => {
            const arr = [1, 2, 3];
            expect(_.initial(arr, 2)).to.eql([1]);
        });
        it('returns a str without last n elements', () => {
            const str = 'boom';
            expect(_.initial(str, 2)).to.eql(['b', 'o']);
        });
    });

    describe('_.keys', () => {
        it('exists', () => {
            expect(_.keys).to.be.a('function');
        });
        it('returns the keys to an object', () => {
            const obj = {
                a: 1,
                b: 2,
                c: 3
            };
            expect(_.keys(obj)).to.eql(['a', 'b', 'c']);
        });
        it('returns the indexes of an array', () => {
            const arr = [2, 5, 8];
            expect(_.keys(arr)).to.eql(['0', '1', '2']);
        });
        it('returns empty arr if given a string or num', () => {
            expect(_.keys('boom')).to.eql([]);
            expect(_.keys(123)).to.eql([]);
        });
    });

    describe('_.values', () => {
        it('exists', () => {
            expect(_.values).to.be.a('function');
        });
        it('returns the keys to an object', () => {
            const obj = {
                a: 1,
                b: 2,
                c: 3
            };
            expect(_.values(obj)).to.eql([1, 2, 3]);
        });
        it('returns array', () => {
            const arr = ['a', 4, [32]];
            expect(_.values(arr)).to.equal(arr);
            expect(_.values(['hello', 56, 'boom'])).to.eql(['hello', 56, 'boom']);
        });
        it('returns empty array for num or string', () => {
            expect(_.values(123)).to.eql([]);
            expect(_.values('hello')).to.eql([]);
        });
    });

    describe('_.each', () => {
        it('exists', () => {
            expect(_.each).to.be.a('function');
        });
        it('returns a number if given as first arg', () => {
            expect(_.each(123)).to.equal(123);
        });
        it('make sure it goes over each item given - arr', () => {
            const arr = [1, 2, 3];
            let count = 0;

            const counter = () => {
                return count++;
            };

            expect(_.each(arr, counter)).to.equal(arr);
            expect(count).to.equal(arr.length);
        });
        it('make sure it goes over each item given - obj', () => {
            const obj = {
                a: 1,
                b: 2
            };
            let count = 0;

            const counter = () => {
                return count++;
            };

            expect(_.each(obj, counter)).to.equal(obj);
            expect(count).to.equal(_.keys(obj).length);
        });
        it('make sure it goes over each item given - str', () => {
            const str = 'people';
            let count = 0;

            const counter = () => {
                return count++;
            };

            expect(_.each(str, counter)).to.equal(str);
            expect(count).to.equal(str.length);
        });
    });

    describe('_.map', () => {
        it('exists', () => {
            expect(_.map).to.be.a('function');
        });
        it('returns a list of equal length changed by iteree', () => {
            const arr = [1, 2, 3];
            const double = (x) => x * 2;
            expect(_.map(arr, double)).to.eql([2, 4, 6]);
        });
        it('returns an array equal to length of str changed by iteree', () => {
            const str = 'chaos control';
            const toUpperCase = (x) => x.toUpperCase();
            expect(_.map(str, toUpperCase)).to.eql(str.toUpperCase().split(''));
        });
        it('returns an array with values of obj changed', () => {
            const obj = {
                a: 1,
                2: 'b'
            };
            const double = (x) => x * 2;
            expect(_.map(obj, double)).to.eql([NaN, 2]);
        });
        it('returns an empty arr if list is a number', () => {
            const double = (x) => x * 2;
            expect(_.map(123, double)).to.eql([]);
        });
    });

    describe('_.reduce', function () {
        it('is a function', function () {
            expect(_.reduce).to.be.a('function');
        });
        it('should add together numbers in an array', function () {
            const list = [1, 2, 3];
            expect(_.reduce(list, (acc, elem) => {
                return acc + elem;
            })).to.equal(6);
        });
        it('should add together numbers in an array in addition to context', () => {
            const list = [1, 2, 3];
            expect(_.reduce(list, (acc, elem) => {
                return acc + elem;
            }, 3)).to.equal(9);
        });
        it('return an array with an array', () => {
            const list = [1, 2, 3];
            expect(_.reduce(list, (acc, elem) => {
                acc.push(elem);
                return acc;
            }, [])).to.eql([1, 2, 3]);
            expect(_.reduce(list, (acc, elem) => {
                if (elem > 1) acc.push(elem);
                return acc;
            }, [])).to.eql([2, 3]);
        });
        it('return an object with an array as arg', () => {
            const list = [1, 2, 3];
            expect(_.reduce(list, (acc, elem) => {
                acc[elem] = elem;
                return acc;
            }, {})).to.eql({
                '1': 1,
                '2': 2,
                '3': 3
            });
            expect(_.reduce(list, (acc, elem) => {
                acc[elem] = elem * 2;
                return acc;
            }, {})).to.eql({
                '1': 2,
                '2': 4,
                '3': 6
            });
        });
        it('return a string with an array as arg', () => {
            const list = ['h', 2, 'e', 'l', 'l', 3, 'o'];
            expect(_.reduce(list, (acc, elem) => {
                if (typeof elem === 'string') acc += elem;
                return acc;
            }, '')).to.equal('hello');
        });
        it('returns an object with an object', () => {
            const list = {
                a: 1,
                b: 2,
                c: 3
            };
            expect(_.reduce(list, (acc, elem) => {
                acc[elem] = elem;
                return acc;
            }, {})).to.eql({
                '1': 1,
                '2': 2,
                '3': 3
            });
        });
        it('returns a string with an object', () => {
            const list = {
                a: 'hel',
                b: 'l',
                c: 'o'
            };
            expect(_.reduce(list, (acc, elem) => {
                acc += elem;
                return acc;
            }, '')).to.equal('hello');
        });
        it('adds all numbers', () => {
            const list = {
                a: 1,
                b: 'a',
                c: 2
            };
            expect(_.reduce(list, (acc, elem) => {
                if (typeof elem === 'number')
                    return acc + elem;
                else return acc;
            }, 0)).to.equal(3);
        });
        it('adds all numbers', () => {
            const list = {
                a: 1,
                b: 'a',
                c: 2
            };
            expect(_.reduce(list, (acc, elem) => {
                if (typeof elem === 'number')
                    return acc + elem;
                else return acc;
            })).to.equal(3);
        });
        it('object returns an array', () => {
            const list = {
                a: 1,
                b: 'a',
                c: 2
            };
            expect(_.reduce(list, (acc, elem) => {
                if (typeof elem !== 'number')
                    acc.push(elem);
                else acc.push(elem * 3);
                return acc;
            }, [])).to.eql([3, 'a', 6]);
        });
        it('function works with string', () => {
            const list = 'hello';
            expect(_.reduce(list, (acc, elem) => {
                acc.push(elem.toUpperCase());
                return acc;
            }, [])).to.eql(['H', 'E', 'L', 'L', 'O']);
        });
    });

    describe('_.flatten', () => {
        it('exists', () => {
            expect(_.flatten).to.be.a('function');
        });
        it('returns an array if nothing nested', () => {
            expect(_.flatten([1, 2, 3])).to.eql([1, 2, 3]);
        });
        it('returns an empty arr if given obj or num', () => {
            expect(_.flatten({
                a: 1
            })).to.eql([]);
            expect(_.flatten(123)).to.eql([]);
        });
        it('returns a split array of a str for a str', () => {
            expect(_.flatten('hello')).to.eql(['h', 'e', 'l', 'l', 'o']);
        });
        it('flattens array', () => {
            expect(_.flatten([1, [2],
                [3], 'hello'
            ])).to.eql([1, 2, 3, 'hello']);
            expect(_.flatten([1, [2, 3], 'hello'])).to.eql([1, 2, 3, 'hello']);
            expect(_.flatten([1, [2, 3],
                ['hello']
            ])).to.eql([1, 2, 3, 'hello']);
        });
        it('flattens nested arrays', () => {
            expect(_.flatten([1, [
                    [2]
                ],
                [3], 'hello'
            ])).to.eql([1, 2, 3, 'hello']);
            expect(_.flatten([1, [34, [2, 3],
                ['hello']
            ]])).to.eql([1, 34, 2, 3, 'hello']);
            expect(_.flatten([23, [true, null],
                [
                    [
                        [
                            [
                                [42]
                            ]
                        ]
                    ]
                ]
            ])).to.eql([23, true, null, 42]);
            expect(_.flatten([23, [true, null, [
                    [
                        [{
                            a: 1
                        }]
                    ]
                ]],
                [
                    [
                        [
                            [
                                [42]
                            ]
                        ]
                    ]
                ]
            ])).to.eql([23, true, null, {
                a: 1
            }, 42]);
        });
        it('takes a second argument, if true only flattens once', () => {
            expect(_.flatten([1, [
                    [2]
                ],
                [3], 'hello'
            ], true)).to.eql([1, [2], 3, 'hello']);
            expect(_.flatten([1, [
                    [
                        [2]
                    ]
                ],
                [
                    [3]
                ], 'hello'
            ], [1, 2, 3])).to.eql([1, [
                    [2]
                ],
                [3], 'hello'
            ]);
            expect(_.flatten([1, [34, [2, 3],
                ['hello']
            ]], true)).to.eql([1, 34, [2, 3],
                ['hello']
            ]);

        });
    });
    describe('_.identity', () => {
        it('is a function', () => {
            expect(_.identity).to.be.a('function');
        });
        it('returns same item given - arr', () => {
            const arr = [1, 2, 3];
            expect(_.identity(arr)).to.be.an('array');
            expect(_.identity(arr)).to.equal(arr);
        });
        it('returns same item given - num', () => {
            const num = 123;
            expect(_.identity(num)).to.be.a('number');
            expect(_.identity(num)).to.equal(num);
        });
        it('returns same item given - str', () => {
            const str = 'people coding';
            expect(_.identity(str)).to.be.a('string');
            expect(_.identity(str)).to.equal(str);
        });
        it('returns same item given - obj', () => {
            const obj = {
                a: 1,
                b: 2
            }
            expect(_.identity(obj)).to.be.an('object');
            expect(_.identity(obj)).to.equal(obj);
        });
    });
    describe('.toArray', () => {
        it('is a function', () => {
            expect(_.toArray).to.be.a('function');
        });
        it('array just get returned', () => {
            const list = [1, 2, 3, 4];
            expect(_.toArray(list)).to.equal(list);
            const list2 = [
                [1, 2, 3, 4], {
                    a: 1,
                    b: 2
                }
            ];
            expect(_.toArray(list2)).to.equal(list2);
        });
        it('returns an array for an object', () => {
            const list = {
                a: 1,
                2: 'b'
            };
            expect(_.toArray(list)).to.eql(['b', 1]);
        });
        it('returns an array for a string', () => {
            const list = 'hello';
            expect(_.toArray(list)).to.eql(['h', 'e', 'l', 'l', 'o']);
        });
        it('returns empty array if not a list', () => {
            const list = 1234;
            expect(_.toArray(list)).to.eql([]);
        });
    });

    describe('_.partition', () => {
        it('is a function', () => {
            expect(_.partition).to.be.a('function');
        });
        it('takes to args - array and predicate', () => {
            expect(_.partition.length).to.equal(2);
        });
        it('if no predicate, returns array-if iterable', () => {
            expect(_.partition('hello')).to.eql([
                ['h', 'e', 'l', 'l', 'o'],
                []
            ]);
            expect(_.partition([1, 2, 3, 4, 5])).to.eql([
                [1, 2, 3, 4, 5],
                []
            ]);
        });
        it('returns two array depending on func for array and obj', () => {
            const isOdd = (x) => {
                if (x % 2 !== 0) return x;
            };
            expect(_.partition([1, 2, 3], isOdd)).to.eql([
                [1, 3],
                [2]
            ]);
            expect(_.partition({
                a: 1,
                b: 2,
                c: 3,
                d: 4
            }, isOdd)).to.eql([
                [1, 3],
                [2, 4]
            ]);
        });
        it('works for a string', () => {
            const big = (x) => {
                if (x > 'h') return x;
            };
            expect(_.partition('hello', big)).to.eql([
                ['l', 'l', 'o'],
                ['h', 'e']
            ]);
        });
    });

    describe('_.random', () => {
        it('exists', () => {
            expect(_.random).to.be.a('function');
        });
        it('returns a random number between two args', () => {
            expect(_.random(1, 99)).to.be.a('number');
        });
        it('returns an integer between the two values', () => {
            expect(_.random(1, 99)).to.be.at.least(1);
            expect(_.random(1, 99)).to.be.below(99);
            const test = () => {
                return _.random(1, 99) % 1 === 0 ? true : false;
            };
            expect(test()).to.equal(true);
        });
        it('only 1 arg - return random value between 0 - num', () => {
            expect(_.random(50)).to.be.at.least(0);
            expect(_.random(50)).to.be.below(50);
        });
        it('works correctly with negative nums', () => {
            expect(_.random(-50)).to.be.below(0);
            expect(_.random(-50)).to.be.at.least(-50);
            expect(_.random(-25, -50)).to.be.below(-25);
            expect(_.random(-25, -50)).to.be.at.least(-50);
        });
    });

    describe('.invoke', () => {
        it('is a function', () => {
            expect(_.invoke).to.be.a('function');
        });
        it('only works with list', () => {
            expect(_.invoke({
                a: 1
            }, 'split')).to.equal('Not a valid list');
        });
        it('sorts two arrays', () => {
            expect(_.invoke([
                [3, 2, 1],
                [4, 5, 6]
            ], 'sort')).to.eql([
                [1, 2, 3],
                [4, 5, 6]
            ]);
        });
        it('uppercases a string', () => {
            expect(_.invoke(['party time'], 'toUpperCase')).to.eql(['PARTY TIME']);
        });
        it('takes an argument which is passed to method', function () {
            expect(_.invoke(['party time'], 'split', '')).to.eql([
                ['p', 'a', 'r', 't', 'y', ' ', 't', 'i', 'm', 'e']
            ]);
        });
    });

    describe('_.filter', () => {
        it('is a function', () => {
            expect(_.filter).to.be.a('function');
        });
        it('returns the values in array if just given an obj', () => {
            expect(_.filter({
                a: 1
            })).to.be.eql([1]);
            expect(_.filter({
                a: 1,
                2: 'b',
                4: 'c',
                d: 3
            })).to.be.eql(['b', 'c', 1, 3]);
            expect(_.filter([3, 4, 1, 2])).to.be.eql([3, 4, 1, 2]);
        });
        it('empty array returned for any number, boolean or null', () => {
            expect(_.filter(123)).to.eql([]);
            expect(_.filter(true)).to.eql([]);
            expect(_.filter(null)).to.eql([]);
        });
        it('str returns correctly', () => {
            expect(_.filter('houses')).to.eql(['h', 'o', 'u', 's', 'e', 's']);
        });
        it('only returns items that satisfy predicate - arr', () => {
            const moreThenFour = (x) => x > 4;
            expect(_.filter([1, 2, 3, 4, 5], moreThenFour)).to.eql([5]);
            expect(_.filter([2, 90, 4], moreThenFour)).to.eql([90]);
        });
        it('only returns items that satisfy predicate - obj', () => {
            const moreThenFour = (x) => x > 4;
            expect(_.filter({
                a: 1,
                b: 5,
                c: 10
            }, moreThenFour)).to.eql([5, 10]);
        });
        it('only returns items that satisfy predicate - str', () => {
            const isUpperCase = (x) => {
                if (x === x.toUpperCase()) return x
            };
            expect(_.filter('HellO', isUpperCase)).to.eql(['H', 'O']);
        });
    });

    describe('_.range', () => {
        it('should be a function', () => {
            expect(_.range).to.be.a('function');
        });
        it('should create the correct (non-inclusive) range when passed a single argument', () => {
            expect(_.range(10)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            expect(_.range(5)).to.eql([0, 1, 2, 3, 4]);
            expect(_.range(7)).to.eql([0, 1, 2, 3, 4, 5, 6]);
            expect(_.range(-5)).to.eql([]);
        });
        it('should create the correct range between a start and stop value if passed 2 arguments', () => {
            expect(_.range(1, 11)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            expect(_.range(2, 5)).to.eql([2, 3, 4]);
            expect(_.range(10, 15)).to.eql([10, 11, 12, 13, 14]);
            expect(_.range(1, -9)).to.eql([]);
        });
        it('should use the step if provided as a third argument', () => {
            expect(_.range(2, 10, 2)).to.eql([2, 4, 6, 8]);
            expect(_.range(2, 5, 1)).to.eql([2, 3, 4]);
        });
        it('should also works for negative ranges and negative steps', () => {
            expect(_.range(0, -10, -2)).to.eql([0, -2, -4, -6, -8]);
            expect(_.range(0, -5, -1)).to.eql([0, -1, -2, -3, -4]);
        });
        it('should return an empty array if asked to create an infinite or empty range', () => {
            expect(_.range(2, -10, 2)).to.eql([]);
            expect(_.range(2, 10, -2)).to.eql([]);
            expect(_.range(2, -10)).to.eql([]);
            expect(_.range(2, 2)).to.eql([]);
            expect(_.range(2, 2, 5)).to.eql([]);
        });
    });

    // double check these tests
    describe('_.where', () => {
        it('should be a function', () => {
            expect(_.where).to.be.a('function');
        });
        it('should take 2 arguments', () => {
            expect(_.where.length).to.equal(2);
        });
        it('should look through each value in an array, returning an array of all the values that contain all of the key-value pairs listed in properties', function () {
            var list = [{
                    breed: 'Pug',
                    age: 1,
                    character: 'friendly'
                },
                {
                    breed: 'Spitz',
                    age: 3,
                    character: 'shy'
                },
                {
                    breed: 'Greyhound',
                    age: 11,
                    character: 'friendly'
                },
                {
                    breed: 'Labrador',
                    age: 5,
                    character: 'lazy'
                },
                {
                    breed: 'Pug',
                    age: 5,
                    character: 'energetic'
                }
            ];
            expect(_.where(list, {
                character: 'friendly'
            })).to.eql([{
                    breed: 'Pug',
                    age: 1,
                    character: 'friendly'
                },
                {
                    breed: 'Greyhound',
                    age: 11,
                    character: 'friendly'
                }
            ]);
            expect(_.where(list, {
                breed: 'Pug',
                character: 'friendly'
            })).to.eql([{
                breed: 'Pug',
                age: 1,
                character: 'friendly'
            }]);
        });
        it('should look through each value in an object, returning an array of all the values that contain all of the key-value pairs listed in properties', function () {
            var list = {
                a: {
                    breed: 'Pug',
                    age: 1,
                    character: 'friendly'
                },
                b: {
                    breed: 'Spitz',
                    age: 3,
                    character: 'shy'
                },
                c: {
                    breed: 'Greyhound',
                    age: 11,
                    character: 'friendly'
                },
                d: {
                    breed: 'Labrador',
                    age: 5,
                    character: 'lazy'
                },
                e: {
                    breed: 'Pug',
                    age: 5,
                    character: 'energetic'
                }
            };
            expect(_.where(list, {
                character: 'friendly'
            })).to.eql([{
                    breed: 'Pug',
                    age: 1,
                    character: 'friendly'
                },
                {
                    breed: 'Greyhound',
                    age: 11,
                    character: 'friendly'
                }
            ]);
            expect(_.where(list, {
                breed: 'Pug',
                character: 'friendly'
            })).to.eql([{
                breed: 'Pug',
                age: 1,
                character: 'friendly'
            }]);
        });
    });

    describe('_.reject', () => {
        it('is a function', () => {
            expect(_.reject).to.be.a('function');
        });
        it('returns an empty array if no predicate', () => {
            expect(_.reject(6767)).to.be.eql([]);
            expect(_.reject({
                a: 1
            })).to.be.eql([]);
            expect(_.reject([1, 2, 3])).to.be.eql([]);
            expect(_.reject('boom')).to.be.eql([]);
        });
        it('return an array subject to conditions in predicate - arr', () => {
            const twoOrMore = x => x >= 2;
            expect(_.reject([1, 2, 3], twoOrMore)).to.be.eql([1]);
        });
        it('returns an empty array if no predicate - str', () => {
            expect(_.reject('string', (x) => {
                return x === 's';
            })).to.be.eql(['t', 'r', 'i', 'n', 'g']);
        });
        it('returns an empty array if no predicate - obj', () => {
            const twoOrMore = x => x >= 2;
            expect(_.reject({
                key1: 1,
                key2: 2
            }, twoOrMore)).to.be.eql([1]);
        });
    });

    describe('_.uniq', () => {
        it('is a function', () => {
            expect(_.uniq).to.be.a('function');
        });
        it('returns an array', () => {
            expect(_.uniq([1, 2, 3])).to.be.an('array');
        });
        it('returns an array of unique values only', () => {
            expect(_.uniq([1, 2, 3, 3, 3, 3, 3])).to.eql([1, 2, 3]);
            expect(_.uniq(['a', 'a', 'b', 'b', 'b', 'b', 'b'])).to.eql(['a', 'b']);
        });
        it('returns an array of unique values only - more complex', () => {
            expect(_.uniq([1, 2, 3, 3, 3, 2, 2, 1, 3, 2, 1])).to.eql([1, 2, 3]);
            expect(_.uniq(['a', 'b', 'a', 'a', 'b', 'b', 'b', 'b', 'b'])).to.eql(['a', 'b']);
        });
        it('returns an empty array for num or obj', () => {
            expect(_.uniq(1232)).to.eql([]);
            expect(_.uniq({
                key1: 1,
                key2: 2
            })).to.eql([]);
        });
        it('if given a string, return arr with unique chars', () => {
            expect(_.uniq('hello')).to.eql(['h', 'e', 'l','o']);
        });
    });
});