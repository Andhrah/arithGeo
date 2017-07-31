const assert = require('chai').assert;
const aritGeo = require('../app/aritGeo.js');

describe("Varify the sequence of an array of numbers: ", function() {

	describe("case for arithemetic sequence", function() {
		it("should return `0` for []", function() {
			assert.equal(aritGeo.aritGeo([]), 0);
		});
	})

	describe("case for arithemetic sequence", function() {
		it("should return `Arithmetic` for [1, 2, 3, 4, 5]", function() {
			assert.equal(aritGeo.aritGeo([1, 2, 3, 4, 5]), "Arithmetic");
		});

		it("should return `Arithmetic` for [5, 10, 15, 20, 25]", function() {
			assert.equal(aritGeo.aritGeo([5, 10, 15, 20, 25 ]), "Arithmetic");
		});

		it("should return `Arithmetic` for [16, 13, 10, 7, 4]", function() {
			assert.equal(aritGeo.aritGeo([16, 13, 10, 7, 4]), "Arithmetic");
		});

		it("should return `Arithmetic` for [10, 16, 22, 28, 34]", function() {
			assert.equal(aritGeo.aritGeo([10, 5, 0, -5, -10]), "Arithmetic");
		});

	});

	describe("case for `geometric` sequence", function() {
		it("should return `Geometric` for [3, 9, 27, 81, 243]", function() {
			assert.equal(aritGeo.aritGeo([3, 9, 27, 81, 243]), "Geometric");
		});

		it("should return `Geometric` for [6, 12, 24, 48, 96]", function() {
			assert.equal(aritGeo.aritGeo([6, 12, 24, 48, 96]), "Geometric");
		});

		it("should return `Geometric` for [32, 8, 2, 0.5, 0.125]", function() {
			assert.equal(aritGeo.aritGeo([32, 8, 2, 0.5, 0.125]), "Geometric");
		});

		it("should return `Geometric` for [100, 20, 4]", function() {
			assert.equal(aritGeo.aritGeo([100, 20, 4]), "Geometric");
		});

	});

	describe("case for neither `arithmetic` nor`geometric` sequence", function() {
		it("should return `-1` for [32, 9, 217, 81, 243]", function() {
			assert.equal(aritGeo.aritGeo([32, 9, 217, 81, 243]), -1);
		});

		it("should return `-1` for ['', 12, 24, 48, 96]", function() {
			assert.equal(aritGeo.aritGeo(['', 12, 24, 48, 96]), -1);
		});

		it("should return `-1` for ['hi', 8, 2, 0.5, 0.125]", function() {
			assert.equal(aritGeo.aritGeo(['hi', 8, 2, 0.5, 0.125]), -1);
		});

		it("should return `-1` for [10, 10, 4, 0, 0.16]", function() {
			assert.equal(aritGeo.aritGeo([10, 10, 4, 0, 0.16]), -1);
		});

	});

})