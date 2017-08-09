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
            const obj = {a:1,b:2};
            expect(_.first(obj)).to.eql([]);
        });
    });
});