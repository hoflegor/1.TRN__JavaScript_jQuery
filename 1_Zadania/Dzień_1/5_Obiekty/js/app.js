String.prototype.upperLower = function () {
    var newString = "", j=0;
    for (var i=0; i<this.length; i++) {
        if (this[i]=== " ") { j++ }
        if ((i+j) % 2) {
            newString += this[i].toLowerCase();
        } else {
            newString += this[i].toUpperCase();
        }
    }
    return newString;
};

var Car = function (color,brand) {
    this.color = color;
    this.brand = brand;
    this.distance = 0;
};

Car.prototype.printCarInfo = function () {
    console.log("Brand: "+this.brand);
    console.log("Color: "+this.color);
    console.log("Distance: "+this.distance);
    console.log("Review: "+this.review);
};

Car.prototype.drive = function(distance) {
    this.distance += distance;
};

Car.prototype.printReviews = function () {
    this.review.forEach(function (val) {
        console.log(val);
    })
};

var instance = new Car("red","Ferrari");

instance.printCarInfo();
instance.drive(100);
instance.printCarInfo();

var review = ["2017.01.01", "2017.02.01", "2017.03.01", "2017.04.01"];

Car.prototype.review = function(array) {
    this.review = array;
}

Car.prototype.newReview = function(date) {
    this.date = date;
    review.push(date);
}
instance.review(review);
instance.printCarInfo();
instance.newReview("2017.05.01");
instance.printCarInfo();
instance.newReview("2017.06.01");
instance.printCarInfo();
instance.printReviews();