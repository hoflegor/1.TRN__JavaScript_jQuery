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
    console.log(newString);
    return newString;
};


// var funnyText = "Smiesznie".upperLower();
// var funnyTextWithSpace = "Javascript jest super".upperLower();

const Car = {
    color:"blue",
    brand:"Kaszlak",
    distance: 0,

    printCarInfo: function () {
        console.log(this.color, this.brand, this.distance);
    },
    drive: function (km) {
        this.distance+=km;
    }

};

Car.review = ["2017.01.01", "2017.02.01", "2017.03.01", "2017.04.01"];

Car.newReview=function (date){
    Car.review.push(date);
}

Car.showReviews = function(){
    console.log(this.review);
}


Car.printCarInfo();
console.log(Car.review);
Car.newReview("2018.08.08");
Car.showReviews();
