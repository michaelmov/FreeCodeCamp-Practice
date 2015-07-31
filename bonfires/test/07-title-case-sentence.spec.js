var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    titleCase = require('../07-title-case-sentence.js');

describe('07-title-case-sentence.js', function() {

    it('Return type should be a string', function() {
        expect(titleCase("I'm a little tea pot")).to.be.a('String');
    });

    it('"I\'m a little tea pot" should equal "I\'m A Little Tea Pot"', function () {
       expect(titleCase("I'm a little tea pot")).to.equal('I\'m A Little Tea Pot');
    });

    it('"sHoRt AnD sToUt" should equal "Short And Stout"', function () {
        expect(titleCase("sHoRt AnD sToUt")).to.equal('Short And Stout');
    });

    it('"HERE IS MY HANDLE HERE IS MY SPOUT" should equal "Here Is My Handle Here Is My Spout"', function () {
        expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal("Here Is My Handle Here Is My Spout");
    });
});