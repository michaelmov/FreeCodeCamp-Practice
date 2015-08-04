var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    bouncer = require('../15-falsey-bouncer.js');

describe('15-falsey-bouncer.js', function() {

    it('[ 7, "ate", " ", false, 9 ] should return [ 7, "ate", 9 ]', function() {
        assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9], 'should remove falsey values');
    });

    it('Should return full array if no falsey elements', function() {
        assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c'], 'should return full array if no falsey elements');
    });

    it('Should return empty array if all elements are falsey', function() {
        assert.deepEqual(bouncer([false, null, 0]), [], 'should return empty array if all elements are falsey');
    });
});




