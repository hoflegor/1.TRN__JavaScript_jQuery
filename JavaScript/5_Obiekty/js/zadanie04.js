var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
};

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var recrut = new Robot('Johny');
console.log(recrut);

recrut.sayHi('Tom');

recrut.changeName('Memo');
console.log(recrut);

recrut.fixIt();