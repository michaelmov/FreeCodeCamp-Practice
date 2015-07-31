var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    largestOfFour = require('../08-largest-in-arrays.js');
    chai.should();

describe('08-largest-in-arrays.js', function() {

    it('Return type should be an array', function() {
        expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.be.a('array');
    });

    it('Largest numbers should be [ 5, 27, 39, 1001 ]', function() {
        assert(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]).should.eql([5,27,39,1001]));
    });

    it('Largest numbers should be [9,35,97,1000000]', function() {
        assert(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]).should.eql([9,35,97,1000000]));
    });

});