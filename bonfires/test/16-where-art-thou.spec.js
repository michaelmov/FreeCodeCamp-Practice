var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    where = require('../16-where-art-thou.js');

describe('16-where-art-thou.js', function() {

    it('Should return an array of objects', function() {
        assert.deepEqual(where([{ first: 'Romeo', last: 'Montague' },
                { first: 'Mercutio', last: null },
                { first: 'Tybalt', last: 'Capulet' }],
                { last: 'Capulet' }),
                [{ first: 'Tybalt', last: 'Capulet' }], 'should return an array of objects');
    });

    it('Should return with multiples', function() {
        assert.deepEqual(where([{ 'a': 1 },
            { 'a': 1 },
            { 'a': 1, 'b': 2 }],
            { 'a': 1 }),
            [{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], 'should return with multiples');
    });
});