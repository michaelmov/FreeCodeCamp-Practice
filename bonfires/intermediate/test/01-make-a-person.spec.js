var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    Person = require('../01-make-a-person.js'),
    bob;

describe('01-make-a-person.js', function() {
    beforeEach(function() {
        bob = new Person('Bob Ross');
    });

    it('Should return the right number of object properties', function() {
        expect(Object.keys(bob).length).to.eql(6);
    });

    it('Should be an instance of Person class', function() {
        expect(bob instanceof Person).to.be.true;
    });

    it('Must not be able to access bob.firstName directly', function() {
        expect(bob.firstName).to.be.undefined;
    });

    it('Must not be able to access bob.lastName directly', function() {
        expect(bob.lastName).to.be.undefined;
    });

    it('bob.getFirstName() should return "Bob" ', function() {
        expect(bob.getFirstName()).to.eql('Bob');
    });

    it('bob.getLastName() should return "Ross" ', function() {
        expect(bob.getLastName()).to.eql('Ross');
    });

    it('bob.getFullName() should return "Bob Ross" ', function() {
        expect(bob.getFullName()).to.eql('Bob Ross');
    });

    it('bob.getFirstName() should return "Happy" after bob.setFullName("Happy Trees") is called', function() {
        bob.setFullName('Happy Trees');
        expect(bob.getFirstName()).to.eql('Happy');
    });

    it('bob.getLastName() should return "Trees" after bob.setFullName("Happy Trees") is called', function() {
        bob.setFullName('Happy Trees');
        expect(bob.getLastName()).to.eql('Trees');
    });

    it('bob.getFullName() should return "George" after bob.setFullName("George Carlin") is called', function() {
        bob.setFullName('George Carlin');
        expect(bob.getFullName()).to.eql('George Carlin');
    });



});