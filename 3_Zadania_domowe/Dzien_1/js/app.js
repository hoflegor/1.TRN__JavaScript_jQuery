--->ZADANIE 1
function getNumber(num,arr){

        var condition=0;

        for(var i=0; i<arr.length; i++) {
            if (arr[i] == num) {
                condition++;
            }
        }
        if (condition>=1){
            return true;
        }
        else{

        return false;
        }

 }


console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));



--->ZADANIE 2
function createIdentityMatrix(rows,columns) {

    var mArr=[];

    for(i=0;i<rows;i++){
        mArr[i]=[];
        for(j=0; j<columns;j++){
            if(i==j){
                mArr[i].push(1);
            }
            else{
                mArr[i].push(0);
            }
        }
    }

    return mArr;

}

console.log(createIdentityMatrix(4,4));


--->ZADANIE 3

var Tree = function (type) {
    this.type=type;
    this.bloom = function () {
        return "I'm blooming";
    }
}

Tree.prototype.bloom=function () {
    return "I'm blooming";
}

var brzoza = new Tree("pancerna");
var umbraculifera = new Tree("lisciate");
var pinus = new Tree ("iglaste");


console.log(brzoza.hasOwnProperty("bloom"));
console.log(umbraculifera.hasOwnProperty("bloom"));
console.log(pinus.hasOwnProperty("bloom"));

console.log(brzoza);
console.log(umbraculifera);
console.log(pinus);

