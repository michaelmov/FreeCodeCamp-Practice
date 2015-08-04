var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    destroyer = require('../17-seek-and-destroy.js');

describe('17-seek-and-destroy.js', function() {

    it('Should remove correct values from an array', function() {
        assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], 'should remove correct values from an array');
    });

    it('Should remove correct values from an array', function() {
        assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], 'should remove correct values from an array');
    });

});