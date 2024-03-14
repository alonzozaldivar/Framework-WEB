/*
var name = "john";

var admin = "name";

console.log(admin)

var array = [1,2,3,4,5,6,7,8,9,0];

for (let i of array) {
    console.log(i)
    
}
const string = "foo Bar";
for


const names = ['bob', 'alejandro', 'zandra', 'anna', 'bob'];
const uniqueNames = new Set(names);
for (let name of uniqueNames) {
console.log(name);
}


const obj = {
    name: "foo Bar",
    age: 23,
    city: "tj",
}

for(let key of Object.keys(obj)) {
    console.log(key + ": " + obj[key]
}



var x = 89
if (x > 900){
    console.log("yes is major")
}else{
    console.log("no, is not major")
}

var animal="kitty"
if(animal === "kitty")
{
    console.log("yes, is it and is a pretty kitty")
}
else
{
console.log("no,is not a pretty kitty")
}

var animal = "kitty"
var cat =  ( animal === "kitty") ? "yes, is it and is a pretty": "no, is nota pretty kitty"

var classroom = 1
switch (classroom){
    case 1:
        console.log("classroom 1")
        break;

    case 2:
        console.log("classroom 2")
        break;

    default:
        console.log("classroom no found")
        break;

}
*/

/*
var base = 89
var altura = 56
function area (base, altura){
    return (base*altura)/2
}

console.log("El area del triangulo: " + area(base,altura))
*/
/*
var l =  89
var w = 23
var h = 12 

function prism(l) {
    return function(w) {
        return function(h){
            return l * w * h;
            }
        }
    }

console.log ("El Volume de l prisma es:" + prism(l)(w)(h))
*/

//------------------ Funciones  inmediatas  anonimas  ---------
/*
(function(){
    console.log("I am  the Annonymus Function")
}());
*/
/*
const f  =  (function(msg){
    console.log("I am  the Annonymus Functio"+ " " + msg)
    return msg

})("fua");
console.log(f)
*/
//---------------funcion anonima invocacion inmediata-------
/*
const fx =  function sum(x,y){
    return x + y
}

const fy = function (g, h ){
    return g + h
}

console.log("fx : " + fx (45, 221) + "fy" + fy (65, 89) )

//------------------------------------------------------------

var sumTwoNumbers = function sum (a, b) { return a + b;
}
sum(1, 3);
*/

//var say = function say (times) {
   // if (times > 0) { console.log('Hello!');
    // this time, 'say' doesn't use the outer variable // it uses the named function
   // say(times - 1);
   // }
//}
//var sayhellotimes =  say;
//sayhellotimes(6);

//function personSomeThings(person, ...msg)
//{
//    msg.forEach(words =>
//        {
//          console.log(person, "plays",words);
//      })
//}
//personSomeThings("joselito","toys","drums","");

//const logArguments = (...args) => console.log(args)
// const list = [1, 2, 3]
//logArguments('a', 'b', 'c', ...list)

