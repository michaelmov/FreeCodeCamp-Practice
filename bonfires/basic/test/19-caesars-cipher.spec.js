var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    rot13 = require('../19-caesars-cipher.js');

describe('19-caesars-cipher.js', function() {
    it('SERR PBQR PNZC should return FREE CODE CAMP', () => {
        expect(rot13('SERR PBQR PNZC')).to.equal('FREE CODE CAMP');
    });

    it('SERR CVMMN! should return FREE PIZZA!', () => {
        expect(rot13('SERR CVMMN!')).to.equal('FREE PIZZA!');
    });
});