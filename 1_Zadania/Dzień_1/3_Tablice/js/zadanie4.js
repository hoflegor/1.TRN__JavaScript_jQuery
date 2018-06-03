var fruits= ["banana", "orange", "apple", "strawberry"];


console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

var all=[];
for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    all.push(fruits[i]);
}
console.log(all);