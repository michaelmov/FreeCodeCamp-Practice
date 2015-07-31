var expect = require('chai').expect,
    assert = require('chai').assert,
    palindrome = require('../05-palindrome.js');

describe('05-palindrome.js', function() {

    it('Should be boolean', function() {
        expect(palindrome("eye")).to.be.a('boolean');
    });

    it('Should return true for "eye"', function() {
       assert.deepEqual(palindrome("eye"), true);
    });

    it('Should return true for "race car"', function() {
        assert.deepEqual(palindrome("race car"), true);
    });

    it('Should return false for "not a palindrome"', function() {
        assert.deepEqual(palindrome("not a palindrome"), false);
    });

    it('Should return true for "race car"', function() {
        assert.deepEqual(palindrome("race car"), true);
    });

    it('Should return true for "A man, a plan, a canal. Panama"', function() {
        assert.deepEqual(palindrome("A man, a plan, a canal. Panama"), true);
    });

    it('Should return true for "never odd or even"', function() {
        assert.deepEqual(palindrome("never odd or even"), true);
    });

    it('Should return false for "nope"', function() {
        assert.deepEqual(palindrome("nope"), false);
    });

});