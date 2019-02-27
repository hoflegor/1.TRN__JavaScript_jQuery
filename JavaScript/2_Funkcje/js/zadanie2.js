function areaCircumference(r) {

    if(typeof r !=="number"){
        return false;
    }

    return{
        "area":Math.PI * Math.pow(r,2),
        "circumferences": 2 * Math.PI * r
    }

}

console.log(areaCircumference(1));
console.log(areaCircumference(undefined));