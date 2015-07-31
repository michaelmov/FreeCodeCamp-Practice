var expect = require('chai').expect,
    assert = require('chai').assert,
    findLongestWord = require('../06-longest-word.js');

describe('06-longest-word.js', function() {
    it('Should return an integer', function() {
        expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.a('Number');
    });

    it('Longest word should be 6 characters', function() {
        expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.equal(6);
    });
});