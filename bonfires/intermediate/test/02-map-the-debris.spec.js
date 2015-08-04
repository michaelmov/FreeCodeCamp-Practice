var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    orbitalPeriod = require('../02-map-the-debris.js');

describe('02-map-the-debris.js', function() {
    it('[{name : "sputkin", avgAlt : 35873.5553}] should return [{name: "sputkin", orbitalPeriod: 86400}]', function() {
        expect(orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}])).to.eqls([{name: "sputkin", orbitalPeriod: 86400}]);
    });

    it('[{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, ' +
        '{name: "moon", avgAlt: 378632.553}])) should return ' +
        '[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]', function() {

        expect(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])).to.eqls(
            [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);
    });
});