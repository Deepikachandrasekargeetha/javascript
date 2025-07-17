var val = 67;
let val2 = 34;
console.log(val);

//console.log("45" == 45);
//console.log("45" === 45);
const prompt = require("prompt-sync")();
let agestr = prompt("enter the age")
let age = parseInt(agestr)

//let age = prompt("enter the age")
let urname = prompt("enter your name:")
console.log(urname);
console.log(age);
////////////////
//var age = prompt("enter the age")
if(age >= 70 & age <= 100){
    console.log("retired")
}
else if(1 >=20 & age > 70){
    console.log("working person")
}
else if(age >=1 & age < 20){
    console.log("still young to work,studying or childhood")
}
//console.log(age);
/////////
const prompt = require("prompt-sync")();
var markstr = prompt("enter the mark")
var mark = parseInt(markstr)
console.log(mark)
if(age >= 80 & mark>=100)
console.log("Grade A")
{
    if(age >= 60 & mark >= 80)
        console.log("Grade B")
}
