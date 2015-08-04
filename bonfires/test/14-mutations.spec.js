var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    mutation = require('../14-mutations.js');
    chai.should();

describe('14-mutations.js', function() {

    it('[ "hello", "hey" ] should be false', function() {
        expect(mutation(['hello', 'hey'])).to.be.false;
    });

    it('[ "hello", "Hello" ] should be true', function() {
        expect(mutation(['hello', 'Hello'])).to.be.true;
    });

    it('[ "Mary", "Army" ] should be true', function() {
        expect(mutation(['Mary', 'Army'])).to.be.true;
    });

    it('[ "Mary", "Aarmy" ] should be true', function() {
        expect(mutation(['Mary', 'Aarmy'])).to.be.true;
    });

    it('[ "Alien", "line" ] should be true', function() {
        expect(mutation(['Alien', 'line'])).to.be.true;
    });

    it('[ "floor", "for" ] should be true', function() {
        expect(mutation(['floor', 'for'])).to.be.true;
    });

});