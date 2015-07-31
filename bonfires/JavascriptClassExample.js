var Car = function(loc) {
    this.loc = loc;
};

// Prototype property is provided by javascript to save methods into
Car.prototype.move = function() {
    this.loc++;
};

var Van = function(loc) {
    Car.call(this, loc);
};
// Inherit all properties of the Car class
Van.prototype = Object.create(Car.prototype);
// Must set the constructor to Van so that Van doesn't inherit Car's constructor
Van.prototype.constructor = Van;
Van.prototype.grab = function () {
    /* ??? */
};

var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
console.log(amy.loc);









