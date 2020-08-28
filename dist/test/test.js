'use strict';
var expect = require('chai').expect;
var Unit = require('../dist/units').default;
//console.log(Unit);
describe('Electric unit class test', function () {
    var unit = new Unit('2.5mW');
    console.log(unit.toString());
    it('should return 2.5', function () {
        var result = unit.value;
        expect(result).to.equal(2.5);
    });
    it('should return m', function () {
        var result = unit.prefix;
        expect(result).to.equal("m");
    });
    it('should return W', function () {
        var result = unit.unit;
        expect(result).to.equal("W");
    });
});
