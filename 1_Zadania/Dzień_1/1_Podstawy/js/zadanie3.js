var num=4, str="silala", bool=true, spec=null,obj={name:"belzebubek", wiek:666 }, tab=[2,4,6,8];

var variable=[num,str,bool,spec,obj,tab];

// num_str=num+str;
// console.log(num_str);
// typeof num_str;
//
// num_bol=num+bool;
// console.log(num_bol);
// typeof num_bol;
//
// num_spec=num+spec;
// console.log(num_spec);
// typeof num_spec;
//
// num_obj=num+obj;
// console.log(num_obj);
// typeof num_obj;

var variableSum;
for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 5; j++) {
        variableSum = variable[i] + variable[j];
        console.log(variable[i] + "+" + variable[j] + "=" + variableSum);
        console.log(typeof variableSum);
    }
}