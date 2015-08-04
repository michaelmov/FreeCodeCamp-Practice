var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    truncate = require('../11-truncate-a-string.js');
    chai.should();

describe('11-truncate-a-string', function() {

    it('"A-tisket a-tasket A green and yellow basket" should equal "A-tisket..."', function() {
        expect(truncate('A-tisket a-tasket A green and yellow basket', 11)).to.eqls('A-tisket...');
    });

    it('Should not truncate if string is = length', function() {
        assert(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length) === 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is = length');
    });

    it('Should not truncate if string is < length', function() {
        assert.strictEqual(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2), 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is < length');
    });
    
});

