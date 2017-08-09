const { expect } = require("chai");
const path = require('path');
const _ = require(path.join(__dirname, '..', './emphasize.js'));

describe('_', function () {
  'use strict';
  it('is an object', function () {
    expect(_).to.be.an('object');
  });
})