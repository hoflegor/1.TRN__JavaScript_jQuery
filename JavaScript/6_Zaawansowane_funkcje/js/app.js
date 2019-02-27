/**
 * Created by Agata on 21.01.2016.
 */

function boilEgg(sec) {

    var interval = setInterval(function () {
        console.log("jajko się gotuje");
    }, 2000);

    var boil = setTimeout(function () {
        console.log('jajko ugotowane');
        clearInterval(interval);
        clearTimeout(boil);
    }, (sec * 1000));

}

// boilEgg(10);

var arguments = [5, 29, 6, 4, 34, 56, 2, 3];

function maxInt(arr) {

    arr.sort(function (a, b){
        return a-b;
    });

    console.log(arr.pop());
}

maxInt(arguments);