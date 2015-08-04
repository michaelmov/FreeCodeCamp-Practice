var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    where = require('../18-where-do-i-belong.js');

describe('18-where-do-i-belong.js', function() {

    it('35 should return 3', function() {
        expect(where([10, 20, 30, 40, 50], 35)).to.equal(3);
    });

    it('30 should return 2', function() {
        expect(where([10, 20, 30, 40, 50], 30)).to.equal(2);
    });
});