var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    repeat = require('../10-repeat-a-string.js');
    chai.should();

describe('10-repeat-a-string.js', function() {

    it('"*" should equal "***"', function() {
        assert.strictEqual(repeat('*', 3), '***', 'should repeat a string n times');
    });

    it('"abc" should equal "abcabcabc"', function() {
        assert.strictEqual(repeat('abc', 3), 'abcabcabc', 'should repeat a string n times');
    });

    it('Should return an empty string for negative numbers', function() {
        assert.strictEqual(repeat('abc', -2), '', 'should return an empty string for negative numbers');
    });

});