'use strict';
var expect = require('chai').expect;
var Unit = require('../dist/units').default;

//console.log(Unit);

describe('Electric unit class test', () => {
	let
		unit = new Unit('2.5mW');
	console.log(unit.toString());
	it('should return 2.5', () => {
		var result = unit.value;
		expect(result).to.equal(2.5);
	});

	it('should return m', () => {
		var result = unit.prefix;
		expect(result).to.equal("m");
	});

	it('should return W', () => {
		var result = unit.unit;
		expect(result).to.equal("W");
	});

});