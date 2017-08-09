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
    });
});