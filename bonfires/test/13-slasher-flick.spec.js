var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    slasher = require( '../13-slasher-flick.js');
    chai.should();

describe('13-slasher-flick.js', function() {

    it('slasher([1, 2, 3], 2) should return [3]', function() {
        assert.deepEqual(slasher([1, 2, 3], 2), [3], 'should drop the first two elements');
    });

    it('should return all elements when n < 1', function() {
        assert.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3], 'should return all elements when n < 1');
    });

    it('should return an empty array when n >= array.length', function() {
        assert.deepEqual(slasher([1, 2, 3], 9), [], 'should return an empty array when n >= array.length');
    });

});