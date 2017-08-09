const {
    expect
} = require("chai");
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
            expect(_.initial(str, 2)).to.eql(['b','o']);
        });
    });
});