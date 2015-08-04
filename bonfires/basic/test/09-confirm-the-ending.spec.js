var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    end = require('../09-confirm-the-ending.js');
    chai.should();

describe('09-confirm-the-ending.js', function() {

    it('"Bastian" should return true for target "n"', function() {
        assert.strictEqual(end('Bastian', 'n'), true, 'should equal true if target equals end of string');
    });

    it('"Connor" should return false for target "n"', function() {
        assert.strictEqual(end('Connor', 'n'), false, 'should equal false if target equals end of string');
    });

    it('"Walking on water and developing software from a specification are easy if both are frozen." should return false for target "specification"', function() {
        assert.strictEqual(end('Walking on water and developing software from a specification are easy if both are frozen.', 'specification'), false, 'should equal false if target equals end of string');
    });

    it('"He has to give me a new name" should return true for target "name"', function() {
        assert.strictEqual(end('He has to give me a new name', 'name'), true, 'should equal true if target equals end of string');
    });

    it('"If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing" should return false for target "mountain"', function() {
        assert.strictEqual(end('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain'), false, 'should equal false if target equals end of string');
    });
});