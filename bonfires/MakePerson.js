var Person = function(firstAndLast) {
    // Split full name into first and last names
    var fullName = firstAndLast,
        firstName = fullName.split(' ')[0],
        lastName = fullName.split(' ')[1];

    // Methods for getting and setting first, last and full name
    this.getFullName = function() {
        return fullName;
    };
    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.setFullName = function(newFullName) {
        fullName = newFullName;
        this.setFirstName(newFullName.split(' ')[0]);
        this.setLastName(newFullName.split(' ')[1]);
    };
    this.setFirstName = function(newFirstName) {
        firstName = newFirstName;
    };
    this.setLastName = function(newLastName) {
        lastName = newLastName;
    };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());


